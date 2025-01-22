// 生成唯一关键帧名称
var uniqueId = 0;
function genUniqueKeyframeName() {
    return "seq-" + uniqueId++;
}

// 场景项目类
class SceneItem {
    constructor(element, animationName, keyframes, duration, keyframeSequence) {
        element.style.visibility = "visible";
        this.keyframe_sequence = keyframeSequence;
        this.element = element;
        this.animation_name = animationName;
        this.animation_duration = duration;
        this.keyframes = keyframes;
    }
}

// 关键帧序列器类
class KeyframeSequencer {
    constructor(containerElement) {
        this._created_keyframes = [];
        this.container_element = containerElement;
        this._sequences = [];
        const styleElement = document.createElement("style");
        document.head.appendChild(styleElement);
        this.stylesheet = styleElement.sheet;
    }

    addSequence(element, keyframes, delay, fillMode) {
        const sequence = {
            element: element,
            keyframe_name: genUniqueKeyframeName(),
            keyframes: keyframes
        };

        sequence.delay = delay || "0s";
        sequence.duration = "1s";
        sequence.fill_mode = fillMode || "both";
        this._sequences.push(sequence);
    }

    playSequence() {
        this._sequences.forEach(sequence => {
            const keyframeRule = `@keyframes ${sequence.keyframe_name} { ${sequence.keyframes} }`;
            this.stylesheet.insertRule(keyframeRule, 0);
            this._created_keyframes.push(sequence.keyframe_name);
            
            const element = sequence.element;
            element.style.animation = `${sequence.keyframe_name} ${sequence.duration} ${sequence.delay} ${sequence.fill_mode}`;
        });
    }
}

// 场景管理器类
class ScenesManager {
    constructor(canvas) {
        this._canvas = canvas;
        this._scenes = [];
        this._playhead = 0;
        this._repeat = false;
        this._repeat_from = 0;
        this._iteration_count = 0;
        this._max_iteration = 0;
        this.oncomplete_callback = null;

        const styleElement = document.createElement("style");
        document.head.appendChild(styleElement);
        this.stylesheet = styleElement.sheet;
    }

    addScene(scene) {
        this._scenes.push(scene);
    }

    playScenes(options = {}) {
        this._canvas.innerHTML = '';  // 清理画布

        // 设置重复选项
        this._repeat = options.repeat || false;
        this._repeat_from = options.repeat_from || 0;
        this._max_iteration = options.repeat_count || 0;
        this.oncomplete_callback = options.oncomplete_callback;

        this._playhead = 0;
        this.playCurrentScene();
    }

    playCurrentScene() {
        const scene = this._scenes[this._playhead];
        if (!scene) return;

        const element = scene.element;
        this._canvas.appendChild(element);

        const keyframeRule = `@keyframes ${scene.animation_name} { ${scene.keyframes} }`;
        this.stylesheet.insertRule(keyframeRule, 0);

        element.style.animation = `${scene.animation_name} ${scene.animation_duration} both`;
        
        if (scene.keyframe_sequence) {
            scene.keyframe_sequence.playSequence();
        }

        element.addEventListener('animationend', () => {
            this._onPlayNext();
        }, { once: true });
    }

    _onPlayNext() {
        this._playhead++;
        
        if (this._playhead >= this._scenes.length) {
            if (this._repeat && (!this._max_iteration || this._iteration_count < this._max_iteration)) {
                this._playhead = this._repeat_from;
                this._iteration_count++;
                this.playCurrentScene();
            } else if (this.oncomplete_callback) {
                this.oncomplete_callback();
            }
        } else {
            this.playCurrentScene();
        }
    }
}

// 导出类
window.SceneItem = SceneItem;
window.KeyframeSequencer = KeyframeSequencer;
window.ScenesManager = ScenesManager;

// 使用示例
const canvas = document.getElementById('your-canvas');
const scenesManager = new ScenesManager(canvas);

// 创建场景
const element = document.createElement('div');
const scene = new SceneItem(
    element,
    'animation-name',
    '0% { opacity: 0; } 100% { opacity: 1; }',
    '1s'
);

scenesManager.addScene(scene);
scenesManager.playScenes();
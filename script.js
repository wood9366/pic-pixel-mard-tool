// ================= 数据区 (Mard Data) =================
const MARD_DB = {
    // A系列
    "A1": "#fffac9", "A2": "#fefec0", "A3": "#ffef85", "A4": "#fff200", "A5": "#ffe600",
    "A6": "#ffd900", "A7": "#ff7f27", "A8": "#e8c80d", "A9": "#ffad5e", "A10": "#ff8c2e",
    "A11": "#ffd68c", "A12": "#ffbe96", "A13": "#ffe680", "A14": "#ff6836", "A15": "#fff8b0",
    "A16": "#fff799", "A17": "#ffeb66", "A18": "#ffb980", "A19": "#ff9a8a", "A20": "#ffdb66",
    "A21": "#ffcc99", "A22": "#ffc17a", "A23": "#f2eada", "A24": "#fffbcd", "A25": "#d9cc6c", "A26": "#cc9933",
    // B系列
    "B1": "#eaff56", "B2": "#b5e61d", "B3": "#99d9ea", "B4": "#22b14c", "B5": "#b5e61d",
    "B6": "#7092be", "B7": "#00a2e8", "B8": "#0ed145", "B9": "#183e26", "B10": "#99d9ea",
    "B11": "#596818", "B12": "#1e5b3e", "B13": "#ccffcc", "B14": "#dfff28", "B15": "#154c23",
    "B16": "#c4ffb8", "B17": "#8c9e1e", "B18": "#ccff00", "B19": "#00a888", "B20": "#b0f2c4",
    "B21": "#008080", "B22": "#074238", "B23": "#232e18", "B24": "#d8f09b", "B25": "#508575", "B26": "#958c3a",
    "B27": "#8fab86", "B28": "#86cba7", "B29": "#798868", "B30": "#9db488", "B31": "#768560", "B32": "#5e7046",
    // C系列
    "C1": "#d7fffa", "C2": "#bef5e8", "C3": "#99d9ea", "C4": "#7092be", "C5": "#00a2e8",
    "C6": "#3f48cc", "C7": "#0047ba", "C8": "#0033cc", "C9": "#1c2b87", "C10": "#00bff3",
    "C11": "#00a3ae", "C12": "#132c4a", "C13": "#add8e6", "C14": "#e0ffff", "C15": "#00ced1",
    "C16": "#0b4a7a", "C17": "#55dbe3", "C18": "#203a4f", "C19": "#1b8aab", "C20": "#106399",
    "C21": "#d4e9fc", "C22": "#7abecf", "C23": "#9ce8e8", "C24": "#589ba0", "C25": "#5fb899", "C26": "#1c9690", "C27": "#aaccc8", "C28": "#bfd6d9",
    // D系列
    "D1": "#b7cfff", "D2": "#8e99d1", "D3": "#194196", "D4": "#283b5e", "D5": "#c56bb4",
    "D6": "#a349a4", "D7": "#6f3198", "D8": "#dccbff", "D9": "#c3b5e6", "D10": "#341852",
    "D11": "#bcbcff", "D12": "#d9a1e3", "D13": "#c440a7", "D14": "#8e2eab", "D15": "#3f2275",
    "D16": "#e0e0ff", "D17": "#c0d0f5", "D18": "#b270d1", "D19": "#e4c3f5", "D20": "#a132e0",
    "D21": "#872b96", "D22": "#564d8f", "D23": "#eae0f7", "D24": "#776fe0", "D25": "#3d36b8", "D26": "#6d6d99",
    // E系列
    "E1": "#ffcccc", "E2": "#ffc4e6", "E3": "#ffaec9", "E4": "#ff85b6", "E5": "#ff5cb0",
    "E6": "#ff2e7e", "E7": "#9e1564", "E8": "#ffd6e6", "E9": "#e58bd2", "E10": "#b83070",
    "E11": "#ffe4df", "E12": "#fcaad8", "E13": "#a10d7e", "E14": "#ffceb8", "E15": "#f2ccd2",
    "E16": "#fff0e6", "E17": "#fae6f5", "E18": "#fccce5", "E19": "#f2cfee", "E20": "#f0d2e4",
    "E21": "#d4afb5", "E22": "#c27fa9", "E23": "#9c859f", "E24": "#d4bbd4",
    // F系列
    "F1": "#ff9991", "F2": "#ff635b", "F3": "#ed1c24", "F4": "#ff3b21", "F5": "#ee1d24",
    "F6": "#b0320d", "F7": "#7d102c", "F8": "#b8052a", "F9": "#e0667e", "F10": "#873e08",
    "F11": "#6b3026", "F12": "#f53c5a", "F13": "#cb4328", "F14": "#ffaba8", "F15": "#d90828",
    "F16": "#fbdbd9", "F17": "#faaa99", "F18": "#db7a48", "F19": "#c24459", "F20": "#ab2b5a",
    "F21": "#d66a8d", "F22": "#ff61af", "F23": "#ff0a8d", "F24": "#c2107e", "F25": "#8b0000",
    // G系列
    "G1": "#ffe2c2", "G2": "#fcc9b1", "G3": "#f7bd9e", "G4": "#d6b495", "G5": "#efa368",
    "G6": "#ea9361", "G7": "#8c624b", "G8": "#4a2e29", "G9": "#e5b67f", "G10": "#ba8c3e",
    "G11": "#e0c391", "G12": "#d8b481", "G13": "#cc8b52", "G14": "#806650", "G15": "#f2f0d8",
    "G16": "#eddac8", "G17": "#594e45", "G18": "#ffe8d3", "G19": "#e89f4b", "G20": "#ab5e3a", "G21": "#c78b69",
    // H系列
    "H1": "#f0f0f0", "H2": "#ffffff", "H3": "#ababab", "H4": "#948f93", "H5": "#5c5c5c",
    "H6": "#333333", "H7": "#000000", "H8": "#f5e3ed", "H9": "#e3e0d9", "H10": "#e2dfee",
    "H11": "#c9c8c6", "H12": "#fff0df", "H13": "#ebe0ca", "H14": "#c2cbd5", "H15": "#9ca9c4",
    "H16": "#211c19", "H17": "#f5f3f4", "H18": "#fffdf1", "H19": "#f7f2ea", "H20": "#9da9ae",
    "H21": "#708090", "H22": "#778899", "H23": "#2f4f4f",
    // M系列
    "M1": "#c9d4c6", "M2": "#8da690", "M3": "#6e8595", "M4": "#d6cac0", "M5": "#d8d3b3",
    "M6": "#c5b696", "M7": "#bea9a4", "M8": "#ad9396", "M9": "#a89484", "M10": "#b89cb6",
    "M11": "#987d9c", "M12": "#574449", "M13": "#daa597", "M14": "#bd6f5a", "M15": "#828086",
    // 特殊系列
    "P1": "#fdfdfd", "P2": "#d0e0e3", "P3": "#c1ffd8", "P4": "#ffb6c1", "P5": "#ff69b4",
    "P6": "#98fb98", "P7": "#ffe4b5", "P8": "#fffacd", "P9": "#e6e6fa", "P10": "#dda0dd",
    "P11": "#b0e0e6", "P12": "#afeeee", "P13": "#87cefa", "P14": "#4682b4", "P15": "#5f9ea0",
    "P16": "#ffdab9", "P17": "#ffdead", "P18": "#ffe4e1", "P20": "#d8bfd8", "P21": "#dda0dd", "P22": "#ffc0cb", "P23": "#db7093",
    "Y1": "#ffff00", "Y2": "#ffff33", "Y3": "#ffff66", "Y4": "#adff2f", "Y5": "#da70d6",
    "R1": "#ff0000", "R2": "#dc143c", "R3": "#ff4500", "R4": "#ff6347", "R5": "#008000",
    "R6": "#006400", "R7": "#00008b", "R8": "#0000cd", "R9": "#4b0082", "R10": "#32cd32",
    "R11": "#ff1493", "R12": "#ff00ff", "R13": "#800000",
    "Q2": "#7fff00", "Q5": "#228b22", "T1": "#ffffff",
};

const BOX_CONTENTS = {
    "1": ["B3", "C3", "D9", "E2", "G1", "A4", "B5", "C5", "D6", "E4", "G5", "A6", "B8", "C8", "D7", "F5", "G7", "A7", "H1", "H2", "H3", "H4", "H5", "H7"],
    "2": ["C2", "C13", "D19", "E8", "A13", "A11", "C10", "C6", "D18", "E3", "A10", "G9", "C11", "C7", "D21", "D13", "F13", "G13", "B12", "D3", "D15", "E7", "F8", "G8"],
    "3": ["A3", "B20", "D16", "D8", "T1", "G2", "B18", "B10", "D11", "D12", "E12", "G3", "B14", "B19", "D2", "D20", "E5", "F10", "B17", "B7", "C16", "D14", "E13", "F7"],
    "4": ["E11", "E16", "F1", "A14", "M6", "M5", "E15", "F14", "F9", "F2", "G14", "M9", "E9", "E6", "F12", "F3", "F11", "M12", "D5", "E10", "F4", "F6", "G17", "H6"],
    "5": ["A15", "A5", "A8", "A12", "A9", "G6", "A1", "B13", "B1", "B2", "B4", "B11", "H2", "C1", "B16", "B6", "C15", "B15", "C14", "D17", "D1", "C4", "C17", "C9"],
    "6": ["H8", "G15", "A2", "A19", "G16", "H9", "H10", "M1", "G11", "G4", "M4", "H14", "M10", "M2", "G12", "M13", "M7", "H11", "M11", "M3", "G10", "M14", "M8", "M15"],
    "7": ["P18", "P16", "P3", "P12", "P1", "T1", "P7", "P17", "P6", "P13", "P9", "P11", "P4", "P5", "P15", "P14", "P2", "R12", "P23", "P22", "P21", "P20", "P10", "P8"],
    "8": ["P10", "R11", "Y2", "Y3", "Q2", "Y4", "Y5", "Y1", "R3", "R4", "R5", "R8", "R9", "R2", "R1", "R10", "R6", "R7", "D10", "R13", "Q5", "B9", "C12", "D4"],
    "9": ["H17", "H18", "H19", "E16", "F16", "F17", "D23", "E24", "E19", "E18", "E17", "E20", "B24", "A16", "A17", "A18", "F24", "F23", "A24", "A22", "A21", "F21", "F22", "A19"],
    "10": ["A26", "A25", "A20", "A23", "G18", "G21", "B26", "B32", "B31", "B30", "B27", "B29", "C22", "C23", "C24", "B28", "C25", "C26", "H15", "H20", "H23", "H22", "C28", "C27"],
    "11": ["F15", "F19", "G20", "E21", "E22", "D26", "F25", "F20", "G19", "F18", "G21", "E23", "D25", "D22", "D24", "C20", "B21", "B25", "H16", "B23", "C18", "B22", "C19", "C26"],
    "A": ["B10", "C2", "C3", "C13", "D16", "D17", "B6", "C4", "C10", "C17", "D1", "D11", "C15", "C11", "C5", "C6", "C7", "D2", "B19", "B7", "C8", "C9", "D3", "C16"],
    "B": ["E12", "E2", "E1", "D19", "D9", "D9", "E6", "E4", "E3", "E9", "D12", "D6", "E5", "E10", "D5", "D13", "D20", "D18", "E7", "E13", "D21", "D14", "D7", "D15"],
    "C": ["C14", "B10", "C1", "B18", "M5", "M6", "B3", "B16", "B13", "B1", "G13", "F10", "B5", "B4", "B2", "B14", "G7", "F11", "B15", "B12", "B8", "B17", "B11", "G8"],
    "D": ["A15", "A3", "A11", "A9", "E14", "F12", "A4", "A13", "A6", "F1", "F2", "F3", "A5", "A10", "A7", "F13", "F9", "F6", "A8", "A14", "F4", "F5", "F8", "F7"],
    "E": ["E15", "E14", "G4", "H2", "H1", "A12", "G3", "G2", "G1", "A1", "T1", "G6", "G5", "G9", "M9", "H3", "H4", "G14", "M12", "G17", "H5", "H6", "H7"]
};

const KIT_CONFIG = {
    24:  ["1"],
    48:  ["1", "2"],
    72:  ["1", "2", "3"],
    96:  ["1", "2", "3", "4"],
    120: ["A", "B", "C", "D", "E"],
    144: ["A", "B", "C", "D", "E", "6"],
    168: ["A", "B", "C", "D", "E", "6", "9"],
    216: ["A", "B", "C", "D", "E", "6", "9", "10", "11"],
    264: ["A", "B", "C", "D", "E", "6", "7", "8", "9", "10", "11"]
};

// ================= 全局变量 =================
let originalImage = null;
let originalFileName = "pattern";

// ================= 工具函数 =================

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    const bigint = parseInt(hex, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

function getContrastingColor(r, g, b) {
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

function getDistance(c1, c2) {
    return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) + 
        Math.pow(c1.g - c2.g, 2) + 
        Math.pow(c1.b - c2.b, 2)
    );
}

// ================= 核心逻辑 =================

// 1. 构建调色板
function buildPalette(kitSize) {
    const boxIds = KIT_CONFIG[kitSize] || KIT_CONFIG[48];
    let palette = [];
    let seen = new Set();

    boxIds.forEach(boxId => {
        if (BOX_CONTENTS[boxId]) {
            BOX_CONTENTS[boxId].forEach(id => {
                if (!seen.has(id) && MARD_DB[id]) {
                    seen.add(id);
                    palette.push({
                        id: id,
                        hex: MARD_DB[id],
                        rgb: hexToRgb(MARD_DB[id]),
                        box: boxId
                    });
                }
            });
        }
    });
    return palette;
}

// 2. 主处理函数
async function processImage() {
    if (!originalImage) return;

    const btn = document.getElementById('generateBtn');
    const status = document.getElementById('status');
    
    btn.disabled = true;
    status.innerText = "处理中...";

    // 获取参数
    const targetWidth = parseInt(document.getElementById('targetWidth').value) || 29;
    const kitSize = parseInt(document.getElementById('kitSize').value) || 48;
    const cellSize = parseInt(document.getElementById('cellSize').value) || 40;

    // 为了避免卡顿，稍作延时
    setTimeout(() => {
        // A. 准备数据
        const palette = buildPalette(kitSize);
        const aspectRatio = originalImage.height / originalImage.width;
        const targetHeight = Math.max(1, Math.floor(targetWidth * aspectRatio));

        // B. 像素化 (Downsampling)
        const offCanvas = document.createElement('canvas');
        offCanvas.width = targetWidth;
        offCanvas.height = targetHeight;
        const ctx = offCanvas.getContext('2d');
        // 使用 drawImage 自动进行重采样 (类似于 PIL 的 resize)
        ctx.drawImage(originalImage, 0, 0, targetWidth, targetHeight);
        
        const imgData = ctx.getImageData(0, 0, targetWidth, targetHeight);
        const data = imgData.data;
        
        // C. 颜色量化 (Color Mapping)
        const finalIndices = new Int32Array(targetWidth * targetHeight);
        const finalPixels = new Uint8Array(data.length); // For preview

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const currentRgb = {r, g, b};

            let minDist = Infinity;
            let bestIdx = 0;

            for (let p = 0; p < palette.length; p++) {
                const dist = getDistance(currentRgb, palette[p].rgb);
                if (dist < minDist) {
                    minDist = dist;
                    bestIdx = p;
                }
            }

            finalIndices[i/4] = bestIdx;
            
            // Fill preview pixel data
            const bestColor = palette[bestIdx].rgb;
            finalPixels[i] = bestColor.r;
            finalPixels[i+1] = bestColor.g;
            finalPixels[i+2] = bestColor.b;
            finalPixels[i+3] = 255; // Alpha
        }

        // D. 绘制像素预览图
        const pixelCanvas = document.getElementById('pixelCanvas');
        pixelCanvas.width = targetWidth;
        pixelCanvas.height = targetHeight;
        const pixelCtx = pixelCanvas.getContext('2d');
        const newImgData = new ImageData(new Uint8ClampedArray(finalPixels), targetWidth, targetHeight);
        pixelCtx.putImageData(newImgData, 0, 0);

        // E. 绘制施工蓝图 (Blueprint)
        const bpCanvas = document.getElementById('blueprintCanvas');
        drawBlueprint(bpCanvas, targetWidth, targetHeight, cellSize, finalIndices, palette);

        // UI 更新
        document.getElementById('resultArea').style.display = 'block';
        document.getElementById('placeholder').style.display = 'none';
        
        // 设置下载链接
        setupDownloadLink('downloadPixel', pixelCanvas, `${originalFileName}_pixel.png`);
        setupDownloadLink('downloadBlueprint', bpCanvas, `${originalFileName}_blueprint.png`);

        btn.disabled = false;
        status.innerText = "";
    }, 50);
}

// 3. 绘制蓝图
function drawBlueprint(canvas, w, h, cellSize, indices, palette) {
    // 基础尺寸
    const bpWidth = w * cellSize;
    const bpHeight = h * cellSize;
    
    // 统计数据
    const stats = {};
    let totalCount = 0;
    for (let i = 0; i < indices.length; i++) {
        const item = palette[indices[i]];
        const box = item.box;
        if (!stats[box]) stats[box] = {};
        if (!stats[box][item.id]) stats[box][item.id] = { item: item, count: 0 };
        stats[box][item.id].count++;
        totalCount++;
    }

    // 计算 Footer 高度 (模拟绘制)
    const footerHeight = calculateFooterHeight(bpWidth, stats, cellSize);
    
    // 设置画布总尺寸
    canvas.width = bpWidth;
    canvas.height = bpHeight + footerHeight;
    const ctx = canvas.getContext('2d');

    // 填充白色背景
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // --- 绘制格子 ---
    ctx.font = `bold ${Math.floor(cellSize * 0.35)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const idx = indices[y * w + x];
            const item = palette[idx];
            
            const px = x * cellSize;
            const py = y * cellSize;

            // 背景色
            ctx.fillStyle = item.hex;
            ctx.fillRect(px, py, cellSize, cellSize);

            // 文字
            ctx.fillStyle = getContrastingColor(item.rgb.r, item.rgb.g, item.rgb.b);
            ctx.fillText(item.id, px + cellSize/2, py + cellSize/2);
        }
    }

    // 网格线
    ctx.lineWidth = 1;
    for (let x = 0; x <= w; x++) {
        ctx.strokeStyle = (x % 10 === 0) ? "#333" : "#ccc";
        ctx.lineWidth = (x % 10 === 0) ? 2 : 1;
        ctx.beginPath();
        ctx.moveTo(x * cellSize, 0);
        ctx.lineTo(x * cellSize, bpHeight);
        ctx.stroke();
    }
    for (let y = 0; y <= h; y++) {
        ctx.strokeStyle = (y % 10 === 0) ? "#333" : "#ccc";
        ctx.lineWidth = (y % 10 === 0) ? 2 : 1;
        ctx.beginPath();
        ctx.moveTo(0, y * cellSize);
        ctx.lineTo(bpWidth, y * cellSize);
        ctx.stroke();
    }

    // 分隔线
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, bpHeight);
    ctx.lineTo(bpWidth, bpHeight);
    ctx.stroke();

    // --- 绘制 Footer ---
    drawFooter(ctx, bpWidth, bpHeight, stats, totalCount, cellSize);
}

// 4. Footer 布局计算与绘制
function sortBoxes(keys) {
    return keys.sort((a, b) => {
        const isNumA = !isNaN(a);
        const isNumB = !isNaN(b);
        if (isNumA && isNumB) return parseInt(a) - parseInt(b);
        if (!isNumA && !isNumB) return a.localeCompare(b);
        return isNumA ? -1 : 1;
    });
}

function calculateFooterHeight(width, stats, cellSize) {
    // 模拟运行一次 drawFooter 来获取高度
    // 这里简化逻辑，假设每行高度固定
    // 实际在JS中直接绘制在 drawFooter 里并动态换行比较方便
    // 为了 simplicity，我们在 drawBlueprint 里先估算一个大概高度，
    // 或者我们直接在 drawFooter 里绘制，并返回最终Y，这里假设两遍绘制太麻烦
    // 我们采用 "模拟上下文" 的方式
    
    const simCtx = {
        y: 30, // margin top
        measureText: (t) => ({ width: t.length * 10 }), // Mock
        fillText: () => {},
        fillRect: () => {},
        strokeRect: () => {},
        beginPath: () => {},
        moveTo: () => {},
        lineTo: () => {},
        stroke: () => {},
    };
    
    // 这里为了精确，我们其实可以在 drawBlueprint 之前先创建一个临时 Canvas 算高度
    // 但为了性能，我们直接写一个 logic layout function
    return performFooterLayout(null, width, stats, totalCount, cellSize);
}

function drawFooter(ctx, width, startY, stats, totalCount, cellSize) {
    ctx.save();
    ctx.translate(0, startY);
    performFooterLayout(ctx, width, stats, totalCount, cellSize);
    ctx.restore();
}

function performFooterLayout(ctx, width, stats, totalCount, cellSize) {
    const marginX = 40;
    let currY = 30;
    
    const blockSize = cellSize;
    const blockGapX = 10;
    const itemGapX = 40;
    const lineGapY = 15;

    // Fonts
    const titleFont = `bold ${Math.max(24, blockSize * 0.7)}px Arial`;
    const textFont = `${Math.max(16, blockSize * 0.5)}px Arial`;
    const idFont = `bold ${Math.floor(blockSize * 0.35)}px Arial`;

    // 1. Title
    if (ctx) {
        ctx.font = titleFont;
        ctx.fillStyle = "#333";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(`BEAD LIST (Total: ${totalCount})`, marginX, currY);
    }
    currY += 40;

    // Divider
    if (ctx) {
        ctx.strokeStyle = "#999";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(marginX, currY);
        ctx.lineTo(width - marginX, currY);
        ctx.stroke();
    }
    currY += 20;

    const sortedBoxIds = sortBoxes(Object.keys(stats));

    sortedBoxIds.forEach(boxId => {
        // Box Header
        if (ctx) {
            ctx.font = textFont;
            ctx.fillStyle = "#000";
            ctx.textAlign = "left";
            ctx.fillText(`[ BOX ${boxId} ]`, marginX, currY);
        }
        currY += blockSize + 10;

        let currX = marginX;
        // Sort items by count desc
        const items = Object.values(stats[boxId]).sort((a, b) => b.count - a.count);

        items.forEach(entry => {
            const countText = `x ${entry.count}`;
            
            // Measure Width
            let countW = 30; // default
            if (ctx) {
                ctx.font = textFont;
                countW = ctx.measureText(countText).width;
            } else {
                countW = countText.length * 10;
            }

            const itemTotalW = blockSize + blockGapX + countW;

            // Check wrap
            if (currX + itemTotalW > width - marginX) {
                currX = marginX;
                currY += blockSize + lineGapY;
            }

            if (ctx) {
                // Draw Block
                ctx.fillStyle = entry.item.hex;
                ctx.fillRect(currX, currY, blockSize, blockSize);
                ctx.strokeStyle = "#ccc";
                ctx.lineWidth = 1;
                ctx.strokeRect(currX, currY, blockSize, blockSize);

                // Draw ID
                ctx.font = idFont;
                ctx.fillStyle = getContrastingColor(entry.item.rgb.r, entry.item.rgb.g, entry.item.rgb.b);
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(entry.item.id, currX + blockSize/2, currY + blockSize/2);

                // Draw Count
                ctx.font = textFont;
                ctx.fillStyle = "#000";
                ctx.textAlign = "left";
                // Vertical align
                const textY = currY + blockSize/2; 
                ctx.fillText(countText, currX + blockSize + blockGapX, textY);
            }

            currX += itemTotalW + itemGapX;
        });

        currY += blockSize + 30; // Space between boxes
    });

    return currY; // Return total height used
}

function setupDownloadLink(linkId, canvas, filename) {
    const link = document.getElementById(linkId);
    // Convert to blob for download (better for large images)
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = filename;
    });
}

// ================= 事件监听 =================

document.getElementById('uploadInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                originalImage = img;
                // 去掉扩展名
                originalFileName = file.name.replace(/\.[^/.]+$/, "");
                document.getElementById('generateBtn').disabled = false;
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('generateBtn').addEventListener('click', processImage);
// --- BUCATA 1 (Adăugată de Tine) ---
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

// Variabile pe care le vom folosi împreună
let robot;
let cursors;
let TILE_WIDTH = 100; let TILE_HEIGHT = 75;
let GRID_COLS = 8; let GRID_ROWS = 8;
let OFFSET_X, OFFSET_Y;
let logicX = 4; let logicY = 4;
let isMoving = false;

function preload() {
    // Aici va adăuga copilul imaginea
}

function create() {
    // Desenăm tabla de șah
    OFFSET_X = (config.width - (TILE_WIDTH * GRID_COLS)) / 2;
    OFFSET_Y = (config.height - (TILE_HEIGHT * GRID_ROWS)) / 2;
    let graphics = this.add.graphics();
    graphics.lineStyle(2, 0x00ffff, 0.3);

    for (let c = 0; c < GRID_COLS; c++) {
        for (let r = 0; r < GRID_ROWS; r++) {
            let x = OFFSET_X + (c * TILE_WIDTH);
            let y = OFFSET_Y + (r * TILE_HEIGHT);
            graphics.strokeRect(x, y, TILE_WIDTH, TILE_HEIGHT);
        }
    }

    cursors = this.input.keyboard.createCursorKeys();
    
    // Aici va adăuga copilul robotul
}

function update() {
    // Aici va veni mișcarea (mai târziu)
}
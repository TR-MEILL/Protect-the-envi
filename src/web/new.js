

let img = new Image();
img.src = 'defa.jpg';




const app = new Vue({
    el:"#main",
    data:{
      clickLoc:{
          x:0,
          y:0
      },
      emptyLoc:{
        x:0,
        y:0
      },
      solved:false,
      img
    },
    computed:{
        boardSize:function(){
            return document.getElementById('puzzle').width
        },
        tileCount:function(){
            return document.getElementById('scale').value
        },
        tileSize:function(){
            return this.boardSize / this.tileCount
        },
        context:function(){
            return document.getElementById('puzzle').get.context('2d')
        }
    },

    methods:{
        puzzleclick() {
            if (this.distance(this.clickLoc.x, this.clickLoc.y, this.emptyLoc.x, this.emptyLoc.y) == 1) {
                this.slideTile(this.emptyLoc, this.clickLoc);
                this.drawTiles();
                }
            if (this.solved) {
                setTimeout(function() {alert("You this.solved it!");}, 500);
                }
        },

        puzzleonmousemove(e) {
            this.clickLoc.x = Math.floor((e.pageX - this.offsetLeft) / this.tileSize);
            this.clickLoc.y = Math.floor((e.pageY - this.offsetTop) / this.tileSize);
        },

        scaleonchange() {
              this.tileCount = this.value;
              this.tileSize = this.boardSize / this.tileCount;
              this.setBoard();
              this.drawTiles();
              this.img.addEventListener('load', this.drawTiles, false);
        },
        drawTiles() {
            this.context.clearRect ( 0 , 0 , this.boardSize , this.boardSize );
            for (var i = 0; i < this.tileCount; ++i) {
                for (var j = 0; j < this.tileCount; ++j) {
                    var x = boardParts[i][j].x;
                    var y = boardParts[i][j].y;
                    if(i != this.emptyLoc.x || j != this.emptyLoc.y || this.solved == true) {
                        this.context.drawImage(img, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize,
                        i * this.tileSize, j * this.tileSize, this.tileSize, this.tileSize);
                        }
                    }
                }
        },
        distance(x1, y1, x2, y2) {
            return Math.abs(x1 - x2) + Math.abs(y1 - y2);
        },
        
        slideTile(toLoc, fromLoc) {
            if (!this.solved) {
                boardParts[toLoc.x][toLoc.y].x = boardParts[fromLoc.x][fromLoc.y].x;
                boardParts[toLoc.x][toLoc.y].y = boardParts[fromLoc.x][fromLoc.y].y;
                boardParts[fromLoc.x][fromLoc.y].x = this.tileCount - 1;
                boardParts[fromLoc.x][fromLoc.y].y = this.tileCount - 1;
                toLoc.x = fromLoc.x;
                toLoc.y = fromLoc.y;
                checkthis.solved();
                }
        },

        checksolved() {
            var flag = true;
            for (var i = 0; i < this.tileCount; ++i) {
                for (var j = 0; j < this.tileCount; ++j) {
                    if (boardParts[i][j].x != i || boardParts[i][j].y != j) {
                        flag = false;
                        }
                    }
                }
            this.solved = flag;
            },

        setBoard() {
            boardParts = new Array(this.tileCount);
            for (var i = 0; i < this.tileCount; ++i) {
                boardParts[i] = new Array(this.tileCount);
                for (var j = 0; j < this.tileCount; ++j) {
                    boardParts[i][j] = new Object;
                    boardParts[i][j].x = (this.tileCount - 1) - i;
                    boardParts[i][j].y = (this.tileCount - 1) - j;
                }
            }
            this.emptyLoc.x = boardParts[this.tileCount - 1][this.tileCount - 1].x;
            this.emptyLoc.y = boardParts[this.tileCount - 1][this.tileCount - 1].y;
            this.solved = false;
        }    
    }
})





















  
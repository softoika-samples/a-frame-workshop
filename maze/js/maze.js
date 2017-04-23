  /**
   * 近づくと現れるコンポーネントを作成
   */
  AFRAME.registerComponent('visible-wall', {
    scheme: {
      // 引数の変数設定

    },
    init: function() {
      // 初回実行処理

    },
    tick: function() {
      // 毎フレーム毎の処理（最大60回/秒）

    },
  });
    
  var makeMaze = function() {

    var w = 25; // 幅（奇数）
    var h = 25; // 高さ（奇数）
    var x;
    var y;
    var maze = new Array();

    // 準備
    for (y = 0; y < h; y++) {
      maze[y] = new Array();
      for (x = 0; x < w; x++) {
        if (y == 0 || y == h -1 || x == 0 || x == w - 1) {
          maze[y][x] = 1; // 外周
        } else if (y % 2 == 0 && x % 2 == 0) {
          maze[y][x] = 1; // [偶数][偶数]
        } else {
          maze[y][x] = 0; // その他
        }
      }
    }


    // 壁位置
    for (y = 2; y < h - 2; y += 2) {
      for (x = 2; x < w - 2; x += 2) {

        var n;
        if (y == 2) { // 一番上の段
          if (maze[y][x-1] == 1) {
            n = rand(0, 2);
          } else {
            n = rand(0, 3);
          }
        } else {
          if (maze[y][x-1] == 1) {
            n = rand(1, 2);
          } else {
            n = rand(1, 3);
          }
        }

        switch (n) {
          case 0: // 上
            maze[y - 1][x] = 1;
            break;
          case 1: // 右
            maze[y][x + 1] = 1;
            break;
          case 2: // 下
            maze[y + 1][x] = 1;
            break;
          default: // 左
            maze[y][x - 1] = 1;
            break;
        }
      }
    }
    return maze;
  };

  // 乱数取得
  var rand = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };


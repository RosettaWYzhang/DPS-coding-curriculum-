function board() {
	this.rows           = 8;
	this.columns        = 8;
    this.currentRow     = 0;
    this.currentColumn  = 0;
    var horizontal     = [ 2,  1, -1, -2, -2, -1, 1, 2 ];
    var vertical       = [-1, -2, -2, -1,  1,  2, 2, 1 ];

    this.create = function(sel) {
        for (var row = 1; row <= this.rows; row++) {
            var evenRow = (row % 2) == 0;
            var tr = document.createElement('tr');
            var id = row;
            tr.id = id;
            document.querySelector(sel).appendChild(tr);
            for (var column = 1; column <= this.columns; column++) {
                var evenColumn = (column % 2) == 0;
                var td = document.createElement('td');
                var id = row + "." + column;
                td.id = id;
                document.getElementById(tr.id).appendChild(td);
                if (!evenRow && !evenColumn) {
                    document.getElementById(td.id).className = "white";
                } else if (!evenRow && evenColumn) {
                    document.getElementById(td.id).className = "grey";
                } else if (evenRow && evenColumn) {
                    document.getElementById(td.id).className = "white";
                } else if (evenRow && !evenColumn) {
                    document.getElementById(td.id).className = "grey";
                }
                document.getElementById(td.id).className += " free";
            }
        }
        document.querySelector('.chessboard').addEventListener('click', this.addCellListeners);
    }

    this.initKnight = function() {
        var row = Math.floor((Math.random() * 8) + 1);
        var column = Math.floor((Math.random() * 8) + 1);
        moveKnight(row, column);
        markFreeCells();
    }

    this.addCellListeners = function(event) {
        if (event.target.tagName.toLowerCase() === 'td') {
            var id = event.target.id;
            var row = id.substring(0, 1);
            var column = id.substring(2);
            moveKnight(row, column);
						var tds = document.getElementsByTagName("td");
						for (var i = 0; i < tds.length; i++) {
								tds[i].className = tds[i].className.replace("free", "");
						}
						markFreeCells();

        }
    }

    function moveKnight(row, column) {
        var id = row + "." + column;
        var el = document.getElementById(id);
        var old = document.getElementById("knight");

        if ((el.className.indexOf("marked") == 1) || (el.className.indexOf("free") == -1)) {
            console.log('U cant.');
            return;
        }

        // Remove knight icon from old position
        if (old !== null) {
            old.parentNode.removeChild(old);
        }

        // Move knight icon to the new position
        el.innerHTML = "<div id=\"knight\"></div>"
        this.currentRow = row;
        this.currentColumn = column;
        // Add 'marked' tag for our new position
        el.className += " marked";

        // Now remove all 'free' tags because we've changed our position
				var tds = document.getElementsByTagName("td");
				for (var i = 0; i < tds.length; i++) {
						tds[i].className = tds[i].className.replace("free", "");
				}
    }

    function markFreeCells() {
        for (var cell = 0; cell < horizontal.length; cell++) {
            var row = parseInt(this.currentRow) + vertical[cell];
            var column = parseInt(this.currentColumn) + horizontal[cell];
            var id = row + "." + column;
            var el = document.getElementById(id);
            if (el !== null && el.className.indexOf("marked") == -1) {
                el.className += " free";
            }
        }
        if (document.getElementsByClassName("free").length == 0) {
            document.querySelector('.chessboard').removeEventListener('click', this.addCellListeners);
            alert("You lose! Hit F5 and try again.");
        }
    }
}

function board2(size) {
	this.rows           = size;
	this.columns        = size;
    this.currentRow     = 0;
    this.currentColumn  = 0;
    var horizontal     = [ 2,  1, -1, -2, -2, -1, 1, 2 ];
    var vertical       = [-1, -2, -2, -1,  1,  2, 2, 1 ];

    this.create = function(sel) {
        for (var row = 1; row <= this.rows; row++) {
            var evenRow = (row % 2) == 0;
            var tr = document.createElement('tr');
            var id = row+".";
            tr.id = id;
            document.querySelector(sel).appendChild(tr);
            for (var column = 1; column <= this.columns; column++) {
                var evenColumn = (column % 2) == 0;
                var td = document.createElement('td');
                var id = row + "." + column +".";
                td.id = id;
                document.getElementById(tr.id).appendChild(td);
                if (!evenRow && !evenColumn) {
                    document.getElementById(td.id).className = "white";
                } else if (!evenRow && evenColumn) {
                    document.getElementById(td.id).className = "grey";
                } else if (evenRow && evenColumn) {
                    document.getElementById(td.id).className = "white";
                } else if (evenRow && !evenColumn) {
                    document.getElementById(td.id).className = "grey";
                }
                document.getElementById(td.id).className += " available";
            }
        }
        document.querySelector('.chessboard2').addEventListener('click', this.addCellListeners);
				document.getElementById("1.1.").className += " visited cant";
				document.getElementById("1.4.").className += " visited cant";
				document.getElementById("4.4.").className += " visited cant";
				document.getElementById("4.1.").className += " visited cant";

				document.getElementById("1.2.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 </p>";
				document.getElementById("1.3.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 </p>";
				document.getElementById("2.1.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 </p>";
				document.getElementById("2.2.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 </p>";
				document.getElementById("2.3.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 </p>";
				document.getElementById("2.4.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6 </p>";
				document.getElementById("3.1.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 </p>";
				document.getElementById("3.2.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 </p>";
				document.getElementById("3.3.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 </p>";
				document.getElementById("3.4.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10 </p>";
				document.getElementById("4.2.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 </p>";
				document.getElementById("4.3.").innerHTML = "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12 </p>";

    }

    this.initKnight = function() {
			/*
        var row = Math.floor((Math.random() * size) + 1);
        var column = Math.floor((Math.random() * size) + 1);
				*/
        moveKnight(1, 2);
        markFreeCells();
    }

    this.addCellListeners = function(event) {
        if (event.target.tagName.toLowerCase() === 'td') {
            var id = event.target.id;
            var row = id.substring(0, 1);
            var column = id.substring(2, 3);
            moveKnight(row, column);
						var tds = document.getElementsByTagName("td");
						for (var i = 0; i < tds.length; i++) {
								tds[i].className = tds[i].className.replace("available", "");
						}
            markFreeCells();


        }
    }

    function moveKnight(row, column) {
        var id = row + "." + column+ ".";
        var el = document.getElementById(id);
        var old = document.getElementById("knight2");

        if ((el.className.indexOf("visited") == 1) || (el.className.indexOf("available") == -1)) {
            console.log('U cant.');
            return;
        }

        // Remove knight icon from old position
        if (old !== null) {
            old.parentNode.removeChild(old);
        }

        // Move knight icon to the new position
        el.innerHTML = "<div id=\"knight2\"></div>"
        this.currentRow = row;
        this.currentColumn = column;
        // Add 'marked' tag for our new position
        el.className += " visited";

        // Now remove all 'free' tags because we've changed our position
				var tds = document.getElementsByTagName("td");
				for (var i = 0; i < tds.length; i++) {
						tds[i].className = tds[i].className.replace("available", "");
				}
    }

    function markFreeCells() {
        for (var cell = 0; cell < horizontal.length; cell++) {
            var row = parseInt(this.currentRow) + vertical[cell];
            var column = parseInt(this.currentColumn) + horizontal[cell];
						console.log(row,column);
            var id = row + "." + column + ".";
            var el = document.getElementById(id);
            if (el !== null && el.className.indexOf("visited") == -1) {
                el.className += " available";
            }
        }
        if (document.getElementsByClassName("available").length == 0) {
            document.querySelector('.chessboard2').removeEventListener('click', this.addCellListeners);
            console.log("You lose! Hit F5 and try again.");
        }
    }
}

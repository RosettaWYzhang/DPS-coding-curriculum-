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





function smallBoard()
{
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var size = 4;
	var squareWidth = 100;

	for(i=0;i<size;i++)
	{
		var tr = document.createElement('tr');
		var id = i+'a';
		tr.id = id;
		for(j=0;j<size;j++)
	{
    var td = document.createElement('td');
		var id = j;
		td.id = i+"a"+j;
		ctx.moveTo(0,squareWidth*j);
	  ctx.lineTo(squareWidth*size,squareWidth*j);
	  ctx.strokeStyle="#C0C0C0";
	  ctx.stroke();

	ctx.moveTo(squareWidth*i,0);
	ctx.lineTo(squareWidth*i,squareWidth*size);
	ctx.stroke();

	var left = 0;
	for(var a=0;a<size;a++) {
			for(var b=0; b<size;b+=2) {
				startX = b * squareWidth;
				if(a%2==0)
				startX = (b+1) * squareWidth;
				ctx.fillStyle="#C0C0C0";
				ctx.fillRect(startX + left,(a*squareWidth) ,squareWidth,squareWidth);
	 }}
	}
}
ctx.fillStyle = "#F8C471";
ctx.fillRect(0,0,squareWidth,squareWidth);
ctx.fillRect((size-1)*squareWidth,0,squareWidth,squareWidth);
ctx.fillRect(0,(size-1)*squareWidth,squareWidth,squareWidth);
ctx.fillRect((size-1)*squareWidth,(size-1)*squareWidth,squareWidth,squareWidth);
ctx.fillStyle = "black";
ctx.font="12px Georgia";
ctx.fillText("Knight's Trail: ",squareWidth*0.1,squareWidth*0.5);
ctx.fillText("Reset",(size-1+0.4)*squareWidth,0.5*squareWidth);
ctx.fillText("Delete Last Move",squareWidth*0,(size-1+0.5)*squareWidth);
ctx.fillText("OK",(size-1+0.4)*squareWidth,(size-1+0.5)*squareWidth);

document.querySelector('.smallChessBoard').addEventListener('click', this.addCellListeners);

this.addCellListeners = function(event) {
		if (event.target.tagName.toLowerCase() === 'td') {
				var id = event.target.id;
				var el =getElementById(id);
				el.className += "cant";
				}
		}
}

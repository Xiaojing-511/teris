var board= document.getElementById('game-board');
	for(var i=0;i<18;i++)
		{
			var tr=board.insertRow();
			for(var j=0;j<10;j++)
			{
				tr.insertCell();
			}
		}			
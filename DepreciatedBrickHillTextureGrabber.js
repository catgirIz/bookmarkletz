javascript:var thing = String(window.location); var num = thing.replace(/[^0-9]/g,''); window.location=`http://api.brick-hill.com/v1/games/retrieveAsset?id=${num}&type=png`;

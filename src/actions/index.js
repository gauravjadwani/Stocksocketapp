import WebSocketAsPromised from 'websocket-as-promised';

export const WEB_SOCKETS = (value) => {
  console.log('actions websockets called', value);
  return(dispatch) => {
    const wsp = new WebSocketAsPromised('ws://stocks.mnet.website');
    wsp.open()
    .then(() => console.log('message','message'));
    wsp.onMessage.addListener(message => a(message,dispatch));

  }
  }
  function a(message,dispatch){
    console.log(message,'coming');
    var holder=[];
    var holdertable=[];
        var d = JSON.parse(message);
        console.log(d,'dd',d.length);
        for (var i = 0; i < d.length; i++) {
          var c = {};
          var t={}
          for (var j in d[i]) {
            c['x'] = d[i][0];
            c['y'] = d[i][1];
            t['name']=d[i][0];
            t['price']=d[i][1];
          }
          holder.push(c);
          holdertable.push(t);

        }
        console.log(JSON.stringify(holder),'holder');
    dispatch({type: 'WEB_SOCKETS', payload:[holder,holdertable]});

  }

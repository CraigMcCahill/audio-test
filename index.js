
window.addEventListener('load', (event) => {
    const audioPlay = (() => {
        let context = null;
        return async url => {
          if (context) context.close();
          context = new AudioContext();
          const source = context.createBufferSource();
          source.buffer = await fetch(url)
            .then(res => res.arrayBuffer())
            .then(arrayBuffer => context.decodeAudioData(arrayBuffer));
          source.connect(context.destination);
          source.start();
        };
      })();
      
    document.getElementById('hat').onclick = () => audioPlay('samples/Hat.wav');
    document.getElementById('tom').onclick = () => audioPlay('samples/Tom.wav');
    document.getElementById('snare').onclick = () => audioPlay('samples/Snare.wav');
    document.getElementById('kick').onclick = () => audioPlay('samples/Kick.wav');
});
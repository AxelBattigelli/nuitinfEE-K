if (window.addEventListener) {
    var state = 0, do_want = [54, 56, 49, 48, 48]; // 68100
    window.addEventListener("keydown", function(e) {
        if (e.keyCode == do_want[state]) 
            state++;
        else 
            state = 0;
        if (state == 5)
            window.location = "/photo";
    }, true);
}

import photo from './photo.png';
import './App.css';

function EasterEgg1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-EE1" alt="photo" />
        <p>Hey !, c'est nous les fous développeurs qui avons fait ce site en une nuit.</p>
      </header>
    </div>
  );
}

export default EasterEgg1;

// --------------------------------------

if (window.addEventListener) {
    var state = 0, do_want = [103, 105, 116];  // git
    window.addEventListener("keydown", function(e) {
        if (e.keyCode == do_want[state]) 
            state++;
        else 
            state = 0;
        if (state == 3)
            window.location = "https://github.com/albertlarsan68/nuitinfo-site";
    }, true);
}

// --------------------------------------*

import batmam from './batmam.jpg';
import './App.css';

function EasterEgg2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={herbe} className="App-batmam" alt="batmam" />
        <p>Crédit : Urban Kids</p>
      </header>
    </div>
  );
}

export default EasterEgg2;
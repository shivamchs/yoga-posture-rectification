let brain;

function setup() {
  createCanvas(640, 480);
  let options = {
    inputs: 34,
    outputs: 5,
    task: 'classification',
    debug: true
  }
  brain = ml5.neuralNetwork(options);
  brain.loadData('yoga-poses-data.json', dataReady);
}

function dataReady() {
  brain.normalizeData();
  brain.train({epochs: 50}, finished); 
}

function finished() {
  console.log('model trained');
  brain.save();
}
const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map(journey => journey.startLocation);
  return result;


};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map(journey => journey.endLocation);
  return result;

};

Traveller.prototype.getModesOfTransport = function () {
  const result = this.journeys.map(journey => journey.transport);
  return result;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter(journey => journey.transport === transport);
  return result

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter(journey => journey.distance > minDistance);
  return result;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((total, journey) => {
     return total + journey.distance;
   }, 0);
  return result;

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const list = this.getModesOfTransport();
  const result = Array.from(new Set(list));
  return result

};


module.exports = Traveller;

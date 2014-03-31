function Timer() {
  this.startTime = 0;

  this.now = function() {
    return new Date().getTime();
  };

  this.running = function() {
    return !this.stopped();
  };

  this.stopped = function() {
    return this.startTime === 0;
  };

  this.start = function() {
    this.startTime = this.now();
    return this.startTime;
  };

  this.reset = function() {
    this.startTime = 0;
    return this.startTime;
  };

  this.duration = function() {
    if (this.running()) {
      var total   = (this.now() - this.startTime) / 1000.0,
          minutes = Math.floor(total / 60.0),
          seconds = (total - (minutes * 60)).toFixed(2);

      if (seconds < 10) { seconds = '0' + seconds; }

      return (minutes > 0) ? minutes + ':' + seconds : seconds;
    } else {
      return '00.00';
    }
  };
}

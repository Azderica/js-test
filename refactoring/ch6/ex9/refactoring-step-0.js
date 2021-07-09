// before
function base(aReading) {}
function taxableCharge(aReading) {}
function calculateBaseCharge(aReading) {}

// after
class Reading {
  base() {}
  taxableCharge() {}
  calculateBaseCharge() {}
}

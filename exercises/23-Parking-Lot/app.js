let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parking) {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0,
  }
  for (let arraySlot of parking) {
    for (let slot of arraySlot) {
      if (slot == 2) state.availableSlots += 1;
      if (slot == 1) state.occupiedSlots += 1;
    }
  }
  state.totalSlots = state.availableSlots + state.occupiedSlots;
  return state;
}

console.log(getParkingLotState(parkingState));

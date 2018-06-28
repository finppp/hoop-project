//Actions are plain JavaScript objects.
//Actions must have a "type: xyz"

//How the store will look:
// {
//   fields:{
//     addressLine1: "my address 1",
//     addressLine2: "my address line 2",
//     city: "my address line 2"
//   },
//    addresses:[],
//    isModalOpen: false
//
// }


export const UPDATE_FIELD = 'UPDATE_FIELD'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const FETCH_ADDRESSES = 'FETCH_ADDRESSES'

//fetch addresses from remote
export function fetchAddresses(addresses) {
  return {
    type: FETCH_ADDRESSES,
    addresses
  }
}

//update a form field in the store
export function updateField(fieldToUpdate, text) {
  return {
    type: UPDATE_FIELD,
    text,
    fieldToUpdate
  }
}

//open the address modal
export function openModal() {
  return {
    type: OPEN_MODAL
  }
}


//close the address modal
export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

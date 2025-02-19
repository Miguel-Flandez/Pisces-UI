
<template>
  <div class="modal-overlay">
    <div class="modal">
      <img src="@/assets/Check.png" alt="Success" class="icon">
      <h2 class="modal-title">Save changes</h2>
      <p class="modal-text">Are you sure you want to save your changes?</p>
      
      <button class="btn save" @click="$emit('confirm')">Save</button>
      <button class="btn cancel" @click="$emit('close')">Cancel</button>
    </div>
  </div>
</template>



<style scoped>
/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal Box */
.modal {
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Icon */
.icon {
  width: 100px;
  margin-bottom: 10px;
}

/* Title */
.modal-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Text */
/* Modal Text - Light Grey & Almost Transparent */
.modal-text {
  font-size: 16px;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.3); /* Light grey, almost transparent */
}

/* Buttons */
.btn {
  width: 100%;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 5px;
}

.save {
  background: blue;
  color: white;
}

.cancel {
  background: transparent;
  border: 2px solid lightgray; /* Adds a light gray border */
  color: black; /* Ensures text is visible */
}

</style>

import React from 'react'

export default function BookingButton({ dataPackage }) {
  return (
    <button type="button" class="btn btn-primary rounded-1 w-100" data-bs-toggle="modal" data-bs-target="#bookingModal" data-package={dataPackage}>أطلب الأن</button>
  );
}

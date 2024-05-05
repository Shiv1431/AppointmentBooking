/* eslint-disable react/prop-types */
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch checkout session. Please try again.");
      }
      if (data.session && data.session.url) {
        window.location.href = data.session.url;
      } else {
        throw new Error("Checkout session URL not found in response.");
      }
    } catch (err) {
      console.error(err); // Log the error for debugging
      toast.error(err.message || "An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="shadow-panelShadow p-3 lg:p-5 rounded-md lg:min-w-[280px]">
        <div className="flex items-center justify-between">
          <p className="text__para mt-0 font-semibold">Ticket Price</p>
          <span className="text-[16px] leading-7 lg:test-[22px] lg:leading-8 text-headingColor font-bold">
            {ticketPrice} INR
          </span>
        </div>

        <div className="mt-[30px]">
          <p className="text__para mt-0 font-semibold text-headingColor">
            Available Time Slots:
          </p>
          <ul className="mt-3">
            {timeSlots?.map((item, index) => (
              <li key={index} className="flex items-center justify-between mb-2">
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
          Book Appointment
        </button>
      </div>
    </>
  );
};

export default SidePanel;

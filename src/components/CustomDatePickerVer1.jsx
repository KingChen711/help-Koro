import {forwardRef, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {vi} from "date-fns/locale";

const futureShowDates = [
  new Date("2024-03-24T14:30:00.000Z"),
  new Date("2024-03-27T15:30:00.000Z"),
  new Date("2024-03-29T09:30:00.000Z"),
  new Date("2024-04-01T19:30:00.000Z"),
];

const CustomDatePickerVer1 = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  //cái comment bên dưới là để chặn eslint báo lỗi, thử xóa thử, nếu eslint báo lỗi, thì giữ comment bên dưới
  // eslint-disable-next-line react/display-name, react/prop-types
  const CustomInput = forwardRef(({value, onClick}, ref) => (
    <button
      className="py-1 px-2 text-sm rounded-sm bg-purple-500 text-white"
      onClick={onClick}
      ref={ref}
    >
      {value ? `Ngày ${value}` : "Chọn một ngày sắp tới..."}
    </button>
  ));

  return (
    <DatePicker
      withPortal //thêm option này vào, khi click vào input, nó sẽ hiện cái lịch giữa màn hình để chọn, không thích thì có thể bỏ :((
      locale={vi} // cái này là để việt hóa
      customInput={<CustomInput />} // custom cái ô input
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      includeDates={futureShowDates}
    />
  );
};

export default CustomDatePickerVer1;

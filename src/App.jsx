import CustomDatePickerVer1 from "./components/CustomDatePickerVer1";
import CustomDatePickerVer2 from "./components/CustomDatePickerVer2";

function App() {
  return (
    <div>
      <p className="text-center my-8 text-lg">
        Version 1 dễ làm hơn, Version 2 có thể custom lại cái ô ngày theo ý
        mình, nhưng cách custom hơi lỏ
      </p>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col">
          <div>Version1:</div>
          <CustomDatePickerVer1 />
        </div>
        <div className="flex flex-col">
          <div>Version2:</div>
          <CustomDatePickerVer2 />
        </div>
      </div>
    </div>
  );
}

export default App;

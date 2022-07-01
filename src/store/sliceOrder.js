import { createSlice } from "@reduxjs/toolkit";


export const sliceOrder = createSlice({
  name: 'sliceOrder',
  initialState: {
    // user: {
    //   first_name: "Иван",
    //   last_name: "Смирнов",
    //   patronymic: "Олегович",
    //   phone: "8900123123",
    //   email: "string@string.ru",
    //   payment_method: "cash" // или online
    // },
    // departure: {
    //   route_direction_id: "123431",
    //   seats: [
    //     {
    //       coach_id: "12341",
    //       person_info: {
    //         is_adult: true,
    //         first_name: "Ivan",
    //         last_name: "Popov",
    //         patronymic: "Popovich",
    //         gender: true,
    //         birthday: "1980-01-01",
    //         document_type: "паспорт",
    //         document_data: "45 6790195"
    //       },
    //       seat_number: 10,
    //       is_child: true,
    //       include_children_seat: true
    //     }
    //   ]
    // }
  }
});
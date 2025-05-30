const quantityAmount = ["Quantity", "Amount"];
const yesNo = ["Yes", "No"];

export   const selectOptions: Record<string, string[]> = {
        borrower_region: ["North America", "Europe", "Asia"],
        sector: ["Energy", "Manufacturing", "Retail"],
        borrower_industry_sector: ["Steel", "Aluminium", "Thermal","Solar"],
        vehicle_type: ["Passenger Car","MotorCycle","Light Commercial Truck", "Medium/heavy Commercial Truck", "Bus"],
        fuel_type:["Petrol","Diesel","Elecctric","Hybrid","Plug-in Hybrid","Natural Gas"],
        fuel_quantity_amount_1:quantityAmount,
        fuel_quantity_amount_2:quantityAmount,
        fuel_quantity_amount_3:quantityAmount,
        electricity_quantity_amount:quantityAmount,

        is_electric:yesNo,
        specific_model_yes_or_no:yesNo,
        actual_fuel_yes_or_no:yesNo,
        actual_data_yes_or_no:yesNo,
        percentage_yes_or_no:yesNo,
        currency:["USD","EUR","INR","GBP"],
        vehicle_make:["val1","val2"],
        vehicle_model:["val1","val2"],
        model_year:Array.from({ length: 2025 - 1993 + 1 }, (_, i) => (1993 + i).toString()),
        fuel_unit:["Liters","Gallons","kWh"],
        distance_unit:["km","miles"],
        electric_source:["Grid Average","Renewable","Energy"],
        actual_distance_data_yes_or_no:yesNo,
        source_yes_or_no:yesNo
    };

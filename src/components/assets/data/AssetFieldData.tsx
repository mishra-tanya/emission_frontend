export  const assetFields: Record<string, {
    label: string; 
    key: string, 
    type?: string, 
    status?: string, 
    min?: number,
    heading?:string, 
    unit?:string,
    conditionalOn?: {
        key: string;
        value: string;
    }; }[]> = {
    business_loan: [
        { label:"heading", key:"general_information", heading: "General Information", status: "optional" },
        { label: "Borrower Name *", key: "borrower_name" },
        { label: "Outstanding Loan Amount *", key: "outstanding_loan", type: "number" ,unit: "(EUR million)"},
        { label: "Borrower Industry Sector *", key: "borrower_industry_sector", type: "select" },
        { label: "Borrower Enterprise Value *", key: "borrower_total_value", type: "number",unit: "(EUR million)" },
        // select
        { label: "Borrower Region *", key: "borrower_region", type: "select" },
        // optional
        // { label: "Reported Emissions (Optional)", key: "reported_emissions", type: "number",status:"optional"  },
        //chnages
        // HEADING DECARED EMISSION
        { label:"heading", key:"declared_emission", heading: "Declared Emission" , status: "optional"},

        { label: "Reported Scope 1 Emissions ", key: "reported_emissions_1", type: "number", status: "optional" },
        { label: "Reported Scope 2 Emissions ", key: "reported_emissions_2", type: "number", status: "optional" },

        // FUEL BASED SCOPE 1 EMISSION
        { label:"heading", key:"fuel_electrictiy_based_emission", heading: "Fuel/ Electricity Based Emission", status: "optional" },

        { label: "Coal  Quantity/Amount", key: "fuel_quantity_amount_1", type: "select" , status: "optional"},
        { label: "Coal (kg per tonne)", key: "fuel_1", type: "number",conditionalOn: { key: "fuel_quantity_amount_1", value: "Amount" }, status: "optional" },
        { label: "Coal (kg per USD)", key: "fuel_1", type: "number",conditionalOn: { key: "fuel_quantity_amount_1", value: "Quantity" }, status: "optional" },

        
        { label: "Natural Gas Quantity/Amount ", key: "fuel_quantity_amount_2", type: "select" , status: "optional"},
        { label: "Natural Gas (kg per thousand cf)", key: "fuel_2", type: "number", conditionalOn: { key: "fuel_quantity_amount_2", value: "Amount" },status: "optional" },
        { label: "Natural Gas (kg per USD) ", key: "fuel_2", type: "number", conditionalOn: { key: "fuel_quantity_amount_2", value: "Quantity" },status: "optional" },


        { label: "Diesel Quantity/Amount", key: "fuel_quantity_amount_3", type: "select" , status: "optional"},
        { label: "Diesel (kg per thousand liters)", key: "fuel_3", type: "number",conditionalOn: { key: "fuel_quantity_amount_3", value: "Amount" }, status: "optional" },
        { label: "Diesel (kg per USD)", key: "fuel_3", type: "number",conditionalOn: { key: "fuel_quantity_amount_3", value: "Quantity" }, status: "optional" },


        // ELECTRICITY BASED
        { label: "Electricity Quantity/Amount", key: "electricity_quantity_amount", type: "select" , status: "optional"},
        { label: "Electicity Quantity/Amount ", key: "electricity", type: "number", status: "optional" },

        // PRODUCTION BASED EMISSION
        { label:"heading", key:"production_based_emission", heading: "Production Based Emission" , status: "optional"},
        
        { label: "Production Quantity ", key: "production_quantity_1", type: "number", status: "optional" },
        // { label: "Production Quantity Scope 2 (Optional)", key: "production_quantity_2", type: "number", status: "optional" },

        // REVENUE  BASED EMISSION
        { label:"heading", key:"revenue_based_emission", heading: "Revenue Based Emission" , status: "optional"},

        { label: "Revenue Amount ", key: "revenue_emission_1", type: "number", status: "optional" },

        // { label: "Physical Activity Data  (Optional)", key: "physical_activity_data",  type: "number",status:"optional"},
    ],





    listed_equity: [
        { label:"heading", key:"heading1", heading: "General Information", status: "optional" },
        { label: "Company Name", key: "company_name" },
        { label: "Outstanding Investment Amount", key: "outstanding_loan", type: "number" },
        { label: "Enterprise Value Including Cash", key: "evic", type: "number" },
        { label: "Geography", key: "geography" },
        // select
        { label: "Sector", key: "sector", type: "select" },
          // HEADING DECARED EMISSION
          { label:"heading", key:"heading2", heading: "Declared Emission" , status: "optional"},

          { label: "Reported Scope 1 Emissions (Optional)", key: "reported_emissions_1", type: "number", status: "optional" },
          { label: "Reported Scope 2 Emissions (Optional)", key: "reported_emissions_2", type: "number", status: "optional" },
  
          // FUEL BASED SCOPE 1 EMISSION
          { label:"heading", key:"heading3", heading: "Fuel / Electricity Based Emission", status: "optional" },
  
          { label: "Fuel 1 Quantity/Amount", key: "fuel_quantity_amount_1", type: "select" , status: "optional"},
          { label: "Fuel 1 (Optional)", key: "fuel_1", type: "number", status: "optional" },
          
          { label: "Fuel 2 Quantity/Amount ", key: "fuel_quantity_amount_2", type: "select" , status: "optional"},
          { label: "Fuel 2  (Optional)", key: "fuel_2", type: "number", status: "optional" },
  
          { label: "Fuel 3 Quantity/Amount", key: "fuel_quantity_amount_3", type: "select" , status: "optional"},
          { label: "Fuel 3 (Optional)", key: "fuel_3", type: "number", status: "optional" },
  
          // ELECTRICITY BASED
          { label: "Electricity Quantity/Amount", key: "electricity_quantity_amount", type: "select" , status: "optional"},
          { label: "Electicity Quantity/Amount (Optional)", key: "electricity", type: "number", status: "optional" },
  
          // PRODUCTION BASED EMISSION
          { label:"heading", key:"heading5", heading: "Production Based Emission" , status: "optional"},
          
          { label: "Production Quantity (Optional)", key: "production_quantity_1", type: "number", status: "optional" },
          // { label: "Production Quantity Scope 2 (Optional)", key: "production_quantity_2", type: "number", status: "optional" },
  
          // REVENUE  BASED EMISSION
          { label:"heading", key:"heading6", heading: "Revenue Based Emission" , status: "optional"},
  
          { label: "Revenue Amount (Optional)", key: "revenue_emission_1", type: "number", status: "optional" },
  
    ],



    project_finance: [
        { label: "Project Name", key: "project_name" },
        { label: "Outstanding Loan", key: "outstanding_loan", type: 'number' },
        { label: "Total Project Cost", key: "total_project_cost", type: 'number' },
        { label: "Project Phase", key: "project_phase" },
        // optional
        { label: "Reported Emissions (Optional)", key: "reported_emissions", type: 'number', status: "optional" },
        { label: "Activity Data (Optional)", key: "activity_data", type: 'number', status: "optional" },
        { label: "Emission Factor (Optional)", key: "emission_factor", type: 'number', status: "optional" },
    ],



    commercial_real: [
        { label: "Building Name", key: "building_name" },
        { label: "Outstanding Loan Amount", key: "outstanding_loan", type: 'number' },
        { label: "Total Property Value", key: "total_property_value", type: 'number' },
        { label: "Floor Area", key: "floor_area", type: 'number' },
        // optional
        { label: "Reported Energy Computation (Optional)", key: "energy_consumption", type: 'number', status: "optional" },
        { label: "Emission Factor (Optional)", key: "emission_factor", type: 'number', status: "optional" },
    ],
    mortages: [
        { label: "Project Name", key: "property_name" },
        { label: "Outstanding Loan Amount", key: "outstanding_loan", type: 'number' },
        { label: "Total Property Value", key: "total_property_value", type: 'number' },
        { label: "Floor Area", key: "floor_area", type: 'number' },
        // select field
        { label: "Property Type", key: "property_type", },
        // optional
        { label: "Reported Energy Consumption (Optional)", key: "energy_consumption", type: 'number', status: "optional" },
        { label: "Emission Factor (Optional)", key: "emission_factor", type: 'number', status: "optional" },
    ],


   
    motor_vehicle: [
        { label: "heading", key: "loan_details", heading: "Loan Details", status: "optional" },
    
        { label: "Loan Id *", key: "loan_id" },
        { label: "Outstanding Loan Amount *", key: "outstanding_loan", type: "number" },
        { label: "Original Value *", key: "original_value", type: "number" },
        { label: "Currency *", key: "currency", type: "select" },
        { label: "Loan Origination Date * ", key: "loan_originated_date", type: "date" }, 
        { label: "Reporting Period (Start) *", key: "reporting_start_date", type: "date" }, 
        { label: "Reporting Period (End) *", key: "reporting_end_date", type: "date" }, 

        { label: "heading", key: "vehicle_identification", heading: "Vehicle Identification", status: "optional" },
        { label: "Do you know the specific vehicle make and model", key: "specific_model_yes_or_no", type: "select", status: "optional" },
        { label: "Vehicle Make", key: "vehicle_make", type: "select", conditionalOn: { key: "specific_model_yes_or_no", value: "Yes" }, status: "optional" },  
        { label: "Vehicle Model", key: "vehicle_model", type: "select", conditionalOn: { key: "specific_model_yes_or_no", value: "Yes" }, status: "optional" }, 
        { label: "Model Year", key: "model_year", type: "select", conditionalOn: { key: "specific_model_yes_or_no", value: "Yes" }, status: "optional" }, 
        { label: "Vehicle Type", key: "vehicle_type", type: "select",conditionalOn: { key: "specific_model_yes_or_no", value: "No" }, status: "optional"  },
        { label: "Fuel Type", key: "fuel_type", type: "select", conditionalOn: { key: "specific_model_yes_or_no", value: "No" } , status: "optional"}, 
    
        { label: "heading", key: "vehicle_usage_data", heading: "Vehicle Usage Data", status: "optional" },
        { label: "Do you have actual fuel consumption data for this vehicle?", key: "actual_fuel_yes_or_no", type: "select", status: "optional" },
        { label: "Fuel Consumption", key: "fuel_consumption", type: "number", conditionalOn: { key: "actual_fuel_yes_or_no", value: "Yes" }, status: "optional"}, 
        { label: "Unit", key: "fuel_unit", type: "select", conditionalOn: { key: "actual_fuel_yes_or_no", value: "Yes" } , status: "optional"},  
        { label: "Do you have actual distance traveled data?", key: "actual_distance_data_yes_or_no", type: "select", conditionalOn: { key: "actual_fuel_yes_or_no", value: "No" } , status: "optional"}, 
        { label: "Distance Traveled", key: "distance_traveled", type: "number", conditionalOn: { key: "actual_distance_data_yes_or_no", value: "Yes" } , status: "optional"}, 
        { label: "Unit", key: "distance_unit", type: "select", conditionalOn: { key: "actual_distance_data_yes_or_no", value: "Yes" } , status: "optional"}, 
        { label: "Vehicle Location", key: "vehicle_location",  conditionalOn: { key: "actual_distance_data_yes_or_no", value: "No" } , status: "optional"}, 
        { label: "Country", key: "country", conditionalOn: { key: "actual_distance_data_yes_or_no", value: "No" } , status: "optional"}, 
        { label: "Region/State", key: "region",  conditionalOn: { key: "actual_distance_data_yes_or_no", value: "No" } , status: "optional"}, 

        { label: "heading", key: "for_hybrid/_plug_in_hybrid", heading: "For Hybrid/Plug-in Hybrid", status: "optional" },
        { label: "Do you know the percentage of electric vs. fossil fuel use?", key: "percentage_yes_or_no", type: "select", status: "optional" },
        { label: "Percentage Electric", key: "percentage_electric", type: "number", conditionalOn: { key: "percentage_yes_or_no", value: "Yes" }, status: "optional" }, 

        { label: "heading", key: "for_electric/_plug_in_hybrid", heading: "For Electric/Plug-in Hybrid", status: "optional" },
        { label: "Do you know the source of electricity?", key: "source_yes_or_no", type: "select" , status: "optional"},
        { label: "Electric Source", key: "electric_source", type: "select", conditionalOn: { key: "source_yes_or_no", value: "Yes" } , status: "optional"}, 

    ]
    
};

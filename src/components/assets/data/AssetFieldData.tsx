export  const assetFields: Record<string, { label: string; key: string, type?: string, status?: string, min?: number,heading?:string }[]> = {
    business_loan: [
        { label:"heading", key:"heading1", heading: "General Information", status: "optional" },
        { label: "Borrower Name *", key: "borrower_name" },
        { label: "Outstanding Loan Amount *", key: "outstanding_loan", type: "number" },
        { label: "Borrower Industry Sector *", key: "borrower_industry_sector", type: "select" },
        { label: "Borrower Enterprise Value *", key: "borrower_total_value", type: "number" },
        // select
        { label: "Borrower Region *", key: "borrower_region", type: "select" },
        // optional
        // { label: "Reported Emissions (Optional)", key: "reported_emissions", type: "number",status:"optional"  },
        //chnages
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
        { label: "Vehicle Name", key: "vehicle_name" },
        { label: "Outstanding Loan Amount", key: "outstanding_loan", type: "number" },
        { label: "Total Vehicle Cost", key: "total_vehicle_cost", type: "number" },
        // select
        { label: "Vehicle Type", key: "vehicle_type", type: "select" },
        // optional
        { label: "Emission Factor for Fuel (Optional)", key: "emission_factor", type: "number", status: "optional" },
        { label: "Annual Fuel Consumptio (Optional)n", key: "annual_fuel_consumption", type: "number", status: "optional" },

    ]
};

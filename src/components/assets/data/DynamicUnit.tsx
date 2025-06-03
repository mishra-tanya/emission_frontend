export const getDynamicUnit = (key: string, sector: string): string | undefined => {
    if (key === "production_quantity_1" || key === "revenue_emission_1") {
        switch (sector) {
            case "Steel":
            case "Aluminium":
            case "Coal_Mining":
            case "Cement":
            case "Basic_Chemicals":
            case "Food_Processing":
            case "Textiles":
            case "Pharmaceuticals":
            case "Agriculture":
                return "(tonne)";
            case "Oil_Gas_Extraction":
                return "(barrel)";
            case "Electric_Power_Generation":
                return "(MWh)";
            case "Solar_Manufacturing":
            case "Wind_Manufacturing":
                return "(MW_capacity)";
            case "Automotive":
                return "(vehicle)";
            case "Aviation":
                return "(aircraft)";
            case "Shipping":
                return "(vessel)";
            case "Construction":
                return "(m2_floor_area)";
            case "Forestry":
                return "(cubic_meter)";
            default:
                return undefined;
        }
    }
    
};

export const COMPANY_INFO = {
    name: "Mas Metal Craft & Automation",
    shortName: "Mas Metal",
    founded: 2009,
    location: "Madurai, Tamil Nadu",
    phone: {
        display: "+91 98421 13321",
        value: "+919842113321",
    },
    email: "masmadu25@gmail.com",
    address: {
        line1: "No-12/f Pudhupatti Main Road,",
        line2: "Near Water Tank, Y. Pudhupatti,",
        city: "Madurai",
        pincode: "625107",
        state: "Tamil Nadu",
        country: "India",
    },
    whatsapp: "+919842113321",
};

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
];

export type Product = {
    id: string;
    title: string;
    category: string;
    image1: string;
    image2: string;
    description: string;
    specifications: Record<string, string>;
};

export const PRODUCTS: Product[] = [
    // Mild Steel Gate
    {
        id: "brown-mild-steel-gate",
        title: "Brown Mild Steel Gate",
        category: "Mild Steel Gate",
        image1: "/Images/Mild Steel Gate/Brown Mild Steel Gate.webp",
        image2: "/Images/Mild Steel Gate/Brown Mild Steel Gate 2..webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Open Style": "Swing",
            "Gate Design": "Modern",
            "Usage/Application": "Home",
            "Surface Finishing": "Paint",
            "Operating Style": "Manual",
            "Color": "Brown",
            "Frame Thickness": "3.5mm"
        }
    },
    {
        id: "entrance-mild-steel-gate",
        title: "Entrance Mild Steel Gate",
        category: "Mild Steel Gate",
        image1: "/Images/Mild Steel Gate/Entrance Mild Steel Gate.webp",
        image2: "/Images/Mild Steel Gate/Entrance Mild Steel Gate 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Open Style": "Sliding",
            "Gate Design": "Antique",
            "Usage/Application": "Entrance",
            "Surface Finishing": "Polished",
            "Operating Style": "Manual",
            "Frame Thickness": "3mm"
        }
    },
    {
        id: "mild-steel-main-gate",
        title: "MILD STEEL MAIN GATE",
        category: "Mild Steel Gate",
        image1: "/Images/Mild Steel Gate/MILD STEEL MAIN GATE.webp",
        image2: "/Images/Mild Steel Gate/MILD STEEL MAIN GATE 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Open Style": "Swing",
            "Gate Design": "Antique",
            "Usage/Application": "Home",
            "Surface Finishing": "Polished",
            "Operating Style": "Manual",
            "Frame Thickness": "3.2mm"
        }
    },
    {
        id: "mild-steel-sliding-main-gate",
        title: "MILD STEEL SLIDING MAIN GATE",
        category: "Mild Steel Gate",
        image1: "/Images/Mild Steel Gate/MILD STEEL SLIDING MAIN GATE .webp",
        image2: "/Images/Mild Steel Gate/MILD STEEL SLIDING MAIN GATE 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Open Style": "Sliding",
            "Gate Design": "Antique",
            "Usage/Application": "Home",
            "Surface Finishing": "Polished",
            "Operating Style": "Manual",
            "Frame Thickness": "4mm"
        }
    },
    {
        id: "mild-steel-grill-gate",
        title: "Mild Steel Grill Gate",
        category: "Mild Steel Gate",
        image1: "/Images/Mild Steel Gate/Mild Steel Grill Gate.webp",
        image2: "/Images/Mild Steel Gate/Mild Steel Grill Gate 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Open Style": "Swing",
            "Gate Design": "Antique",
            "Surface Finish": "Polish",
            "Usage/Application": "Home",
            "Operating Style": "Manual",
            "Thickness": "3.2mm"
        }
    },
    {
        id: "mild-steel-hinged-gate",
        title: "Mild Steel Hinged Gate",
        category: "Mild Steel Gate",
        image1: "/Images/Mild Steel Gate/Mild Steel Hinged Gate.webp",
        image2: "/Images/Mild Steel Gate/Mild Steel Hinged Gate 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Open Style": "Hinged",
            "Gate Design": "Antique",
            "Usage/Application": "Home",
            "Surface Finishing": "Polished",
            "Operating Style": "Manual",
            "Frame Thickness": "3mm"
        }
    },
    {
        id: "mild-steel-sliding-gate",
        title: "Mild Steel Sliding Gate",
        category: "Mild Steel Gate",
        image1: "/Images/Mild Steel Gate/Mild Steel Sliding Gate.webp",
        image2: "/Images/Mild Steel Gate/Mild Steel Sliding Gate 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Open Style": "Sliding",
            "Gate Design": "Antique",
            "Usage/Application": "Office",
            "Surface Finishing": "Polished",
            "Operating Style": "Manual",
            "Frame Thickness": "3.8mm"
        }
    },
    {
        id: "mild-steel-sliding-grill-gate",
        title: "Mild Steel Sliding Grill Gate",
        category: "Mild Steel Gate",
        image1: "/Images/Mild Steel Gate/Mild Steel Sliding Grill Gate.webp",
        image2: "/Images/Mild Steel Gate/Mild Steel Sliding Grill Gate 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Open Style": "Sliding",
            "Gate Design": "Antique",
            "Surface Finish": "Polish",
            "Usage/Application": "Home",
            "Operating Style": "Manual",
            "Thickness": "4mm"
        }
    },
    {
        id: "outdoor-mild-steel-sliding-gate",
        title: "Outdoor Mild Steel Sliding Gate",
        category: "Mild Steel Gate",
        image1: "/Images/Mild Steel Gate/Outdoor Mild Steel Sliding Gate.webp",
        image2: "/Images/Mild Steel Gate/Outdoor Mild Steel Sliding Gate 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Open Style": "Sliding",
            "Gate Design": "Antique",
            "Usage/Application": "Outdoor",
            "Surface Finishing": "Polished",
            "Operating Style": "Manual",
            "Frame Thickness": "3.5mm"
        }
    },
    // Stainless Steel Railing
    {
        id: "interior-stainless-steel-staircase-railing",
        title: "Interior Stainless Steel Staircase Railing",
        category: "Stainless Steel Railing",
        image1: "/Images/Stainless Steel Railing/Interior Stainless Steel Staircase Railing.webp",
        image2: "/Images/Stainless Steel Railing/Interior Stainless Steel Staircase Railing 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Mounting Type": "Floor",
            "Position": "Staircase",
            "Usage/Application": "Home",
            "Material": "Stainless Steel",
            "Design": "Panel",
            "Color": "Silver",
            "Surface Finish": "Polished",
            "Material Grade": "SS304",
            "Is It Corrosion Resistant": "Corrosion Resistant",
            "Thickness": "3.2mm"
        }
    },
    {
        id: "round-pipe-stainless-steel-staircase-railing",
        title: "Round Pipe Stainless Steel Staircase Railing",
        category: "Stainless Steel Railing",
        image1: "/Images/Stainless Steel Railing/Round Pipe Stainless Steel Staircase Railing.webp",
        image2: "/Images/Stainless Steel Railing/Round Pipe Stainless Steel Staircase Railing 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Mounting Type": "Floor",
            "Position": "Staircase",
            "Material": "Stainless Steel",
            "Usage/Application": "Home",
            "Design": "Panel",
            "Color": "Silver",
            "Surface Finish": "Polished",
            "Material Grade": "SS304",
            "Is It Corrosion Resistant": "Corrosion Resistant",
            "Thickness": "3mm"
        }
    },
    {
        id: "ss202-staircase-railing",
        title: "SS202 Staircase Railing",
        category: "Stainless Steel Railing",
        image1: "/Images/Stainless Steel Railing/SS202 Staircase Railing.webp",
        image2: "/Images/Stainless Steel Railing/SS202 Staircase Railing 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Mounting Type": "Floor",
            "Position": "Staircase",
            "Material": "Stainless Steel",
            "Usage/Application": "Home",
            "Design": "Panel",
            "Color": "Silver",
            "Surface Finish": "Polished",
            "Material Grade": "SS202",
            "Is It Corrosion Resistant": "Corrosion Resistant",
            "Thickness": "2.5mm"
        }
    },
    {
        id: "ss304-staircase-railing",
        title: "SS304 Staircase Railing",
        category: "Stainless Steel Railing",
        image1: "/Images/Stainless Steel Railing/SS304 Staircase Railing.webp",
        image2: "/Images/Stainless Steel Railing/SS304 Staircase Railing 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Mounting Type": "Floor",
            "Position": "Staircase",
            "Material": "Stainless Steel",
            "Usage/Application": "Home",
            "Design": "Panel",
            "Color": "Silver",
            "Surface Finish": "Polished",
            "Material Grade": "SS304",
            "Is It Corrosion Resistant": "Corrosion Resistant",
            "Thickness": "3.8mm"
        }
    },
    {
        id: "silver-stainless-steel-staircase-railing",
        title: "Silver Stainless Steel Staircase Railing",
        category: "Stainless Steel Railing",
        image1: "/Images/Stainless Steel Railing/Silver Stainless Steel Staircase Railing.webp",
        image2: "/Images/Stainless Steel Railing/Silver Stainless Steel Staircase Railing 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Mounting Type": "Floor",
            "Position": "Staircase",
            "Material": "Stainless Steel",
            "Usage/Application": "Home",
            "Design": "Panel",
            "Color": "Silver",
            "Surface Finish": "Polished",
            "Material Grade": "SS304",
            "Is It Corrosion Resistant": "Corrosion Resistant",
            "Thickness": "3.2mm"
        }
    },
    {
        id: "square-pipe-stainless-steel-staircase-railing",
        title: "Square Pipe Stainless Steel Staircase Railing",
        category: "Stainless Steel Railing",
        image1: "/Images/Stainless Steel Railing/Square Pipe Stainless Steel Staircase Railing.webp",
        image2: "/Images/Stainless Steel Railing/Square Pipe Stainless Steel Staircase Railing 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Mounting Type": "Floor",
            "Position": "Staircase",
            "Usage/Application": "Home",
            "Material": "Stainless Steel",
            "Design": "Panel",
            "Color": "Silver",
            "Surface Finish": "Polished",
            "Material Grade": "SS304",
            "Is It Corrosion Resistant": "Corrosion Resistant",
            "Thickness": "3mm"
        }
    },
    {
        id: "straight-stainless-steel-staircase-railing",
        title: "Straight Stainless Steel Staircase Railing",
        category: "Stainless Steel Railing",
        image1: "/Images/Stainless Steel Railing/Straight Stainless Steel Staircase Railing.webp",
        image2: "/Images/Stainless Steel Railing/Straight Stainless Steel Staircase Railing 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Mounting Type": "Floor",
            "Position": "Staircase",
            "Usage/Application": "Office",
            "Material": "Stainless Steel",
            "Design": "Panel",
            "Color": "Silver",
            "Surface Finish": "Polished",
            "Material Grade": "SS304",
            "Is It Corrosion Resistant": "Corrosion Resistant",
            "Thickness": "4mm"
        }
    },
    // Window Grill
    {
        id: "grey-mild-steel-window-grill",
        title: "Grey Mild Steel Window Grill",
        category: "Window Grill",
        image1: "/Images/Window Grill/Grey Mild Steel Window Grill.webp",
        image2: "/Images/Window Grill/Grey Mild Steel Window Grill 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Product Type": "Window Grill",
            "Grill Design": "Antique",
            "Surface Finish": "Polished",
            "Usage/Application": "For Window",
            "Technique": "Welding",
            "Mount Type": "Wall",
            "Thickness": "3mm"
        }
    },
    {
        id: "mild-steel-window-grill",
        title: "Mild Steel Window Grill",
        category: "Window Grill",
        image1: "/Images/Window Grill/Mild Steel Window Grill.webp",
        image2: "/Images/Window Grill/Mild Steel Window Grill 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Product Type": "Window Grill",
            "Grill Design": "Modern",
            "Surface Finish": "Polished",
            "Usage/Application": "For Window",
            "Technique": "Welding",
            "Mount Type": "Wall",
            "Thickness": "3mm",
            "Shape": "Rectangular"
        }
    },
    {
        id: "stainless-steel-gate",
        title: "Stainless Steel Gate",
        category: "Window Grill",
        image1: "/Images/Window Grill/Stainless Steel Gate.webp",
        image2: "/Images/Window Grill/Stainless Steel Gate 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Size": "8x6 Feet",
            "Material": "Stainless Steel",
            "Open Style": "Sliding",
            "Gate Design": "Modern",
            "Usage/Application": "Home",
            "Color": "Silver",
            "Grade": "304",
            "Surface Finishing": "Color coating",
            "Opening Pattern": "Horizontal",
            "Country of Origin": "Made in India"
        }
    },
    {
        id: "wall-mounted-mild-steel-window-grill",
        title: "Wall Mounted Mild Steel Window Grill",
        category: "Window Grill",
        image1: "/Images/Window Grill/Wall Mounted Mild Steel Window Grill.webp",
        image2: "/Images/Window Grill/Wall Mounted Mild Steel Window Grill 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Product Type": "Window Grill",
            "Grill Design": "Antique",
            "Surface Finish": "Polished",
            "Usage/Application": "For Window",
            "Technique": "Welding",
            "Mount Type": "Wall",
            "Thickness": "3mm"
        }
    },
    {
        id: "welded-mild-steel-window-grill",
        title: "Welded Mild Steel Window Grill",
        category: "Window Grill",
        image1: "/Images/Window Grill/Welded Mild Steel Window Grill.webp",
        image2: "/Images/Window Grill/Welded Mild Steel Window Grill 2.webp",
        description: "We are one of the leading manufacturer of Swing open compound gate which are fabricated by using high-grade raw material obtained from trusted vendors.",
        specifications: {
            "Minimum Order Quantity": "100 Kg",
            "Material": "Mild Steel",
            "Product Type": "Window Grill",
            "Grill Design": "Antique",
            "Surface Finish": "Polished",
            "Usage/Application": "For Window",
            "Technique": "Welding",
            "Mount Type": "Wall",
            "Thickness": "3mm",
            "Shape": "Rectangular"
        }
    }
];
export const singleFilter = [
    { 
        id: "price",
        name: "price",
        options: [
            {value: "149-399", label: "₹149 to ₹399" },
            {value: "149-399", label: "₹149 to ₹399" },
            {value: "149-399", label: "₹149 to ₹399" },
            {value: "149-399", label: "₹149 to ₹399" },
            {value: "149-399", label: "₹149 to ₹399" },
            {value: "149-399", label: "₹149 to ₹399" },
        ],
    },
    {
        id: "stock",
        name: "Avaliability",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out of Stock"}
        ],
    },
  ];
  export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
        { value: 'Black', label: 'Black', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]
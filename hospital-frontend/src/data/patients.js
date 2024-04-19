const patients =[
    {
        id: '001223466655',
        name: 'يوشع ترسيسي',
        gender: 'ذكر',
        age: 21,
        address: 'حمص-فيروزة',
        number: '0935741791',
        blood: 'A+',
        height: 172,
        weight: 65,
        visits: [
            {
                id: 0,
                title: 'مراجعة',
                on_hold: true,
                created_at: '2024/11/10'
            },
            {
                id: 1,
                title: 'صورة قزحية',
                on_hold: false,
                created_at: '2024/11/10'
            },
            {
                id: 2,
                title: 'عملية استئصال لوز',
                on_hold: false,
                created_at: '2024/11/10'
            },
        ]
    },
    {
        id: '00125661615',
        name: 'مروان خوري',
        gender: 'ذكر',
        age: 40,
        address: 'حمص-الارمن',
        number: '0935741791',
        blood: 'A+',
        height: 172,
        weight: 65,
        visits: [
            {
                id: 4,
                title: 'مراجعة',
                on_hold: false,
                created_at: '2024/11/10'
            },
            {
                id: 5,
                title: 'صورة قزحية',
                on_hold: false,
                created_at: '2024/11/10'
            },
            {
                id: 6,
                title: 'عملية استئصال لوز',
                on_hold: false,
                created_at: '2024/11/10'
            },
        ]
    },
    {
        id: '021565664646',
        name: 'نجاة عاطالله',
        gender: 'ذكر',
        age: 61,
        address: 'حمص-الارمن',
        number: '0935741791',
        blood: 'A+',
        height: 172,
        weight: 65,
        visits: [
            {
                id: 7,
                title: 'صورة قزحية',
                on_hold: true,
                created_at: '2024/11/10'
            },
            {
                id: 8,
                title: 'عملية استئصال لوز',
                on_hold: false,
                created_at: '2024/11/10'
            },
        ]
    },
    {
        id: '026354616541',
        name: 'محمد الحاج',
        gender: 'انثى',
        age: 28,
        address: 'حمص-الارمن',
        number: '0935741791',
        blood: 'A+',
        height: 172,
        weight: 65,
        visits: [
            {
                id: 7,
                title: 'صورة قزحية',
                on_hold: false,
                created_at: '2024/11/10'
            },
            {
                id: 8,
                title: 'عملية استئصال لوز',
                on_hold: false,
                created_at: '2024/11/10'
            },
        ]
    },
]

export default patients
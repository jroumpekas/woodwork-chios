import work1 from "../assets/works/work1.jpg";
import work2 from "../assets/works/work2.jpg";
import work3 from "../assets/works/work3.jpg";
import work4 from "../assets/works/work4.jpg";
import work5 from "../assets/works/work5.jpg";
import work6 from "../assets/works/work6.jpg";


const loadImages = (
    modules: Record<string, string>
): string[] => {
    return Object.entries(modules)
        .sort(([pathA], [pathB]) =>
            pathA.localeCompare(pathB, undefined, {
                numeric: true,
            })
        )
        .map(([, image]) => image);
};

const kitchenImages = loadImages(
    import.meta.glob(
        "../assets/works/xylini-kataskevi/*.jpg",
        {
            eager: true,
            import: "default",
        }
    ) as Record<string, string>
);

const customFurnitureImages = loadImages(
    import.meta.glob(
        "../assets/works/epiplo-kata-paraggelia/*.jpg",
        {
            eager: true,
            import: "default",
        }
    ) as Record<string, string>
);

const interiorWoodworkImages = loadImages(
    import.meta.glob(
        "../assets/works/esoteriki-xylourgiki-ergasia/*.jpg",
        {
            eager: true,
            import: "default",
        }
    ) as Record<string, string>
);

const specialConstructionImages = loadImages(
    import.meta.glob(
        "../assets/works/eidiki-xylini-kataskevi/*.jpg",
        {
            eager: true,
            import: "default",
        }
    ) as Record<string, string>
);

const kitchenConstructionImage: string[] = loadImages(
    import.meta.glob(
        "../assets/works/sinthesi-kouzinas_kai-ntoulapia/*.jpg",
        {
            eager: true,
            import: "default",
        }
    )
);

const woodKitchenConstructionImage: string[] = loadImages(
    import.meta.glob(
        "../assets/works/xylini-kouzina/*.jpg",
        {
            eager: true,
            import: "default",
        }

    )as Record<string, string>
)


export type WorkCategory =
    | "Κουζίνες"
    | "Έπιπλα"
    | "Εσωτερικοί χώροι"
    | "Επαγγελματικοί χώροι"
    | "Ειδικές κατασκευές"
    | "Σύνθεση Κουζίνας και Ντουλάπια"
    | "Ξύλινη Κουζίνα"


export type Work = {
    slug: string;
    title: string;
    category: WorkCategory;
    coverImage: string;
    description: string;
    images: string[];
    featured?: boolean;
};
export const works: Work[] = [
    {
        slug: "xylini-kataskevi",
        title: "Ξύλινη κατασκευή",
        category: "Κουζίνες",
        coverImage: work1,
        description:
            "Ενδεικτική ξύλινη κατασκευή με έμφαση στη λεπτομέρεια, την ποιότητα των υλικών και την πρακτικότητα του χώρου.",
        images: kitchenImages,
        featured: true,
    },
    {
        slug: "epiplo-kata-paraggelia",
        title: "Έπιπλο κατά παραγγελία",
        coverImage: work2,
        category: "Έπιπλα",
        description:
            "Κατασκευή επίπλου προσαρμοσμένη στις ανάγκες του πελάτη και στις διαστάσεις του χώρου.",
        images: customFurnitureImages,
        featured: true,
    },
    {
        slug: "esoteriki-xylourgiki-ergasia",
        title: "Εσωτερική ξυλουργική εργασία",
        coverImage: work3,
        category: "Ειδικές κατασκευές",
        description:
            "Εσωτερικές ξυλουργικές εργασίες με στόχο την αισθητική, τη λειτουργικότητα και την αντοχή στον χρόνο.",
        images: interiorWoodworkImages,
        featured: true,
    },
    {
        slug: "eidiki-xylini-kataskevi",
        title: "Ειδική ξύλινη κατασκευή",
        coverImage: work4,
        category: "Επαγγελματικοί χώροι",
        description:
            "Ειδική ξύλινη κατασκευή κατά παραγγελία για κατοικίες ή επαγγελματικούς χώρους.",
        images: specialConstructionImages,
        featured: true,
    },

    {
        slug: "sinthesi-kouzinas_kai-ntoulapia",
        title: "Σύνθεση Κουζίνας και Ντουλάπια",
        coverImage: work5,
        category: "Σύνθεση Κουζίνας και Ντουλάπια",
        description:
            "Σχεδιασμός και κατασκευή σύνθεσης κουζίνας με λειτουργικά ντουλάπια, προσαρμοσμένα στις διαστάσεις και στις ανάγκες του χώρου, με έμφαση στην εργονομία, την αποθήκευση και την αισθητική.",
        images: kitchenConstructionImage,
        featured: true,
    },

    {
        slug: "xylini-kouzina",
        title: "Ξύλινη Κουζίνα",
        coverImage: work6,
        category: "Ξύλινη Κουζίνα",
        description:
        "Χειροποίητη ξύλινη κουζίνα υψηλής αισθητικής και αντοχής, σχεδιασμένη στα μέτρα σας " +
            "με έμφαση στη λειτουργικότητα και τη λεπτομέρεια.",
        images: woodKitchenConstructionImage,
        featured: true,
    }
];

export const featuredWorks = works.filter((work) => work.featured);

export const getWorkBySlug = (slug: string | undefined) => {
    return works.find((work) => work.slug === slug);
};
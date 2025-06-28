export const PAINTING_ELEMENTS = {
    eras: {
        title: 'Art Movements',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>,
        cards: [
            {
                id: 'renaissance',
                name: 'Renaissance',
                details: 'Renaissance scene with harmonious, balanced composition, naturalistic forms, precise details, and sfumato, evoking classical revival and idealized realism',
            },
            {
                id: 'baroque',
                name: 'Baroque',
                details: 'Baroque composition with dramatic, dynamic forms, chiaroscuro lighting, rich textures, deep shadows, and intense emotional energy',
            },
            {
                id: 'romanticism',
                name: 'Romanticism',
                details: 'Romanticism landscape with dramatic atmosphere, vivid colors, dynamic brushwork, and sublime nature, emphasizing emotional and individual expression',
            },
            {
                id: 'impressionism',
                name: 'Impressionism',
                details: 'Impressionist scene with loose brushwork, vibrant colors, broken color, light effects, and en plein air everyday setting, creating atmospheric haze',
            },
            {
                id: 'post_impressionism',
                name: 'Post-Impressionism',
                details: 'Post-Impressionist composition with bold colors, expressive brushstrokes, distorted forms, flattened perspective, and emotional, symbolic content',
            },
            {
                id: 'expressionism',
                name: 'Expressionism',
                details: 'Expressionist scene with intense colors, distorted forms, exaggerated features, and raw emotion, expressed through angular shapes and gestural brushwork',
            },
            {
                id: 'fauvism',
                name: 'Fauvism',
                details: 'Fauvist composition with wild brushwork, vibrant, non-naturalistic colors, simplified forms, bold outlines, and energetic, expressive color planes',
            },
            {
                id: 'cubism',
                name: 'Cubism',
                details: 'Cubist scene with fragmented, geometric forms, multiple perspectives, faceted shapes, monochromatic tones, and deconstructed, collage-like composition',
            },
            {
                id: 'surrealism',
                name: 'Surrealism',
                details: 'Surrealist scene with dreamlike, symbolic imagery, distorted proportions, hyper-realistic details, and irrational, impossible combinations, evoking the unconscious',
            },
            {
                id: 'abstract_expressionism',
                name: 'Abstract Expressionism',
                details: 'Abstract Expressionist composition with gestural brushwork, emotive colors, drips, splatters, and large-scale, energetic, non-representational forms',
            },
        ]
      
    },
    medium: {
        title: 'Medium',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>,
        cards: [
            {
                id: "oil_painting",
                name: "Oil Painting",
                details: "Oil painting with rich colors, luminous depth, layered pigments, and subtle transitions, featuring a textured, blended surface."
            },
            {
                id: "watercolor",
                name: "Watercolor",
                details: "Watercolor painting with transparent, fluid washes, soft edges, and luminous granulation effects, using wet-in-wet techniques."
            },
            {
                id: "acrylic",
                name: "Acrylic",
                details: "Acrylic painting with vibrant, opaque coverage, fast-drying layers, sharp edges, and a plastic-like sheen for versatile effects."
            },
            {
                id: "pastel",
                name: "Pastel",
                details: "Pastel drawing with velvety, soft textures, blendable, rich pigmentation, and a matte finish, featuring smudged effects."
            },
            {
                id: "digital_painting",
                name: "Digital Painting",
                details: "Digital painting with crisp, scalable details, infinite palette, precise layers, and perfect blending using filter effects."
            }
        ]
    },
    techniques: {
        title: 'Techniques',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>,
        cards: [
            {
                id: "impasto",
                name: "Impasto",
                details: "Impasto technique with thick paint, textured surface, bold strokes, and visible brush or knife marks, creating a 3D, sculptural quality."
            },
            {
                id: "sfumato",
                name: "Sfumato",
                details: "Sfumato technique with soft transitions, blurred outlines, and subtle gradations, creating a smoke-like effect with no visible brushstrokes."
            },
            {
                id: "chiaroscuro",
                name: "Chiaroscuro",
                details: "Chiaroscuro technique with strong contrast, dramatic lighting, sharp shadows, and highlighted edges, creating depth and volumetric modeling."
            },
            {
                id: "pointillism",
                name: "Pointillism",
                details: "Pointillism technique with dots, optical mixing, and distinct marks, creating a pixelated effect with vibrant, vibrating colors."
            },
            {
                id: "glazing",
                name: "Glazing",
                details: "Glazing technique with transparent layers and a smooth surface, creating luminous depth and a jewel-like quality of color."
            },
            {
                id: "knife_painting",
                name: "Knife Painting",
                details: "Knife painting with a palette knife, featuring thick impasto, bold application, textured strokes, and sharp edges for a chunky effect."
            },
            {
                id: "scumbling",
                name: "Scumbling",
                details: "Scumbling technique using a dry brush for subtle texture, broken color, and a soft focus, creating a hazy, blurred appearance."
            },
            {
                id: "tenebrism",
                name: "Tenebrism",
                details: "Tenebrism technique with extreme contrast, dramatic illumination, dark backgrounds, and spotlighting, creating a theatrical effect."
            },
            {
                id: "alla_prima",
                name: "Alla Prima",
                details: "Alla Prima technique with wet-on-wet painting, completed in one session, featuring fresh color and spontaneous, direct application."
            },
            {
                id: "sgraffito",
                name: "Sgraffito",
                details: "Sgraffito technique with a scratched surface revealing an underlayer, creating textured effects with contrasting colors and linear designs."
            },
            {
                id: "dry_brush",
                name: "Dry Brush",
                details: "Dry brush technique with minimal paint, rough texture, and scratchy, broken color effects, giving a sketch-like, textured quality."
            },
            {
                id: "hatching",
                name: "Hatching",
                details: "Hatching technique with parallel lines and cross-hatching for shading, creating textural effects with linear marks."
            },
            {
                id: "feathering",
                name: "Feathering",
                details: "Feathering technique with soft blending and delicate strokes, creating smooth gradients and gradual transitions."
            }
        ]
    },
    mood: {
        title: 'Mood',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>,
        cards: [
            {
                id: "serene",
                name: "Serene",
                details: "A serene mood, evoking calm, peaceful, and tranquil emotions."
            },
            {
                id: "melancholic",
                name: "Melancholic",
                details: "A melancholic mood, conveying sadness, introspection, and a sense of longing."
            },
            {
                id: "joyful",
                name: "Joyful",
                details: "A joyful mood, filled with happiness, lightheartedness, and a sense of celebration."
            },
            {
                id: "mysterious",
                name: "Mysterious",
                details: "A mysterious mood, evoking intrigue, enigma, and hidden secrets."
            },
            {
                id: "tense",
                name: "Tense",
                details: "A tense mood, filled with suspense, unease, and emotional intensity."
            },
            {
                id: "ethereal",
                name: "Ethereal",
                details: "An ethereal mood, otherworldly, light, and dreamlike, with a delicate, transcendental feel."
            },
            {
                id: "foreboding",
                name: "Foreboding",
                details: "A foreboding mood, evoking a sense of impending doom or danger, filled with dark tension."
            },
            {
                id: "whimsical",
                name: "Whimsical",
                details: "A whimsical mood, playful, fanciful, and lighthearted, filled with imaginative, quirky elements."
            }
        ]
      
    },
    quality: {
        title: 'Quality',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>,
        cards: [
            {
                id: "crisp",
                name: "Crisp",
                details: "A crisp quality, with clear, well-defined, and sharp details."
            },
            {
                id: "soft",
                name: "Soft",
                details: "A soft quality, with gentle, blurred edges and a delicate appearance."
            },
            {
                id: "grungy",
                name: "Grungy",
                details: "A grungy quality, featuring rough, worn, and distressed textures with a raw feel."
            },
            {
                id: "polished",
                name: "Polished",
                details: "A polished quality, smooth and refined, with a glossy and finished appearance."
            },
            {
                id: "weathered",
                name: "Weathered",
                details: "A weathered quality, showing signs of aging, wear, and exposure, with a rustic feel."
            },
            {
                id: "pristine",
                name: "Pristine",
                details: "A pristine quality, immaculate and untouched, with a flawless and clean finish."
            },
            {
                id: "sharp",
                name: "Sharp",
                details: "A sharp quality, with precise and well-defined edges, delivering high clarity."
            },
            {
                id: "blurred",
                name: "Blurred",
                details: "A blurred quality, with soft, indistinct edges, creating a dreamy, out-of-focus effect."
            },
            {
                id: "grainy",
                name: "Grainy",
                details: "A grainy quality, with a textured, coarse appearance, giving a raw, unrefined feel."
            },
            {
                id: "smooth",
                name: "Smooth",
                details: "A smooth quality, with a clean, even surface, free from imperfections or texture."
            }
        ]
    },
    lighting: {
        title: 'Lighting',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>,
        cards: [
            {
                id: "sunlit",
                name: "Sunlit",
                details: "Sunlit lighting condition, featuring bright, natural sunlight with clear visibility and warm tones."
            },
            {
                id: "overcast",
                name: "Overcast",
                details: "Overcast lighting condition, with soft, diffused light, muted colors, and a cloudy, subdued atmosphere."
            },
            {
                id: "golden_hour",
                name: "Golden Hour",
                details: "Golden hour lighting, with warm, soft sunlight casting long shadows and rich, golden hues."
            },
            {
                id: "moonlit",
                name: "Moonlit",
                details: "Moonlit lighting condition, with cool, soft illumination from the moon, creating a serene and calm atmosphere."
            },
            {
                id: "backlit",
                name: "Backlit",
                details: "Backlit lighting, with light coming from behind the subject, creating silhouettes and a glowing outline."
            },
            {
                id: "dappled_light",
                name: "Dappled Light",
                details: "Dappled light condition, with patches of light filtering through objects, creating a pattern of light and shadow."
            },
            {
                id: "misty",
                name: "Misty",
                details: "Misty lighting, with soft, diffused light and low visibility, creating an ethereal, foggy atmosphere."
            },
            {
                id: "stark_shadows",
                name: "Stark Shadows",
                details: "Lighting with stark shadows, featuring high contrast and deep, dramatic shadow areas."
            },
            {
                id: "dramatic_spotlighting",
                name: "Dramatic Spotlighting",
                details: "Dramatic spotlighting, with intense, focused light illuminating a subject against a dark background."
            },
            {
                id: "neon_glow",
                name: "Neon Glow",
                details: "Neon glow lighting, with bright, vibrant neon colors casting an artificial, electric light."
            },
            {
                id: "candlelit",
                name: "Candlelit",
                details: "Candlelit lighting, with warm, flickering light from candles, creating a soft, intimate glow."
            },
            {
                id: "fluorescent",
                name: "Fluorescent",
                details: "Fluorescent lighting, with cool, harsh light typical of artificial fluorescent bulbs, often casting a sterile ambiance."
            },
            {
                id: "harsh_flash",
                name: "Harsh Flash",
                details: "Harsh flash lighting, with intense, direct light creating sharp, bright highlights and deep shadows."
            },
            {
                id: "soft_ambient",
                name: "Soft Ambient",
                details: "Soft ambient lighting, with gentle, diffused light evenly filling the space, creating a calm and balanced atmosphere."
            }
        ]
    },
    brushwork: {
        title: 'Brushwork',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>,
        cards: [
            {
                id: "gestural",
                name: "Gestural",
                details: "Gestural brushwork with expressive, free-flowing strokes conveying motion and emotion."
            },
            {
                id: "dynamic",
                name: "Dynamic",
                details: "Dynamic brushwork with lively, energetic strokes creating a sense of movement."
            },
            {
                id: "spontaneous",
                name: "Spontaneous",
                details: "Spontaneous brushwork with quick, intuitive strokes emphasizing immediacy and expression."
            },
            {
                id: "energetic",
                name: "Energetic",
                details: "Energetic brushwork with bold, vigorous strokes full of intensity and life."
            },
            {
                id: "bold_strokes",
                name: "Bold Strokes",
                details: "Bold strokes with strong, assertive brushwork making a striking visual impact."
            },
            {
                id: "visible_texture",
                name: "Visible Texture",
                details: "Brushwork with visible texture, showcasing the physicality and materiality of the paint."
            },
            {
                id: "rough_edges",
                name: "Rough Edges",
                details: "Brushwork with rough edges, giving an unfinished, raw quality to the painting."
            },
            {
                id: "painterly",
                name: "Painterly",
                details: "Painterly brushwork with loose, expressive strokes that highlight the artist's hand."
            },
            {
                id: "meticulous",
                name: "Meticulous",
                details: "Meticulous brushwork with precise, careful application and attention to detail."
            },
            {
                id: "detailed",
                name: "Detailed",
                details: "Detailed brushwork with fine, intricate strokes emphasizing accuracy and precision."
            },
            {
                id: "refined",
                name: "Refined",
                details: "Refined brushwork with smooth, polished strokes reflecting careful technique."
            },
            {
                id: "smooth",
                name: "Smooth",
                details: "Smooth brushwork with even, fluid strokes creating a soft, polished surface."
            },
            {
                id: "careful_execution",
                name: "Careful Execution",
                details: "Brushwork with careful execution, featuring deliberate, controlled strokes and refined details."
            },
            {
                id: "sharp_edges",
                name: "Sharp Edges",
                details: "Brushwork with sharp edges, delivering crisp, well-defined lines and contours."
            },
            {
                id: "fine_lines",
                name: "Fine Lines",
                details: "Brushwork with fine lines, featuring delicate, precise strokes and intricate details."
            },
            {
                id: "photorealistic",
                name: "Photorealistic",
                details: "Photorealistic brushwork with meticulous detail, creating a highly realistic and lifelike effect."
            }
        ]
    },
    texture: {
        title: 'Texture',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
            </svg>,
        cards: [
            {
                id: "smooth",
                name: "Smooth",
                details: "A smooth texture with an even, polished surface free from irregularities."
            },
            {
                id: "rough",
                name: "Rough",
                details: "A rough texture with a coarse, uneven surface that feels rugged and irregular."
            },
            {
                id: "tactile",
                name: "Tactile",
                details: "A tactile texture that invites touch, with a distinct, tangible quality."
            },
            {
                id: "glossy",
                name: "Glossy",
                details: "A glossy texture with a shiny, reflective surface that catches light."
            },
            {
                id: "matte",
                name: "Matte",
                details: "A matte texture with a flat, non-reflective finish, creating a soft and muted look."
            },
            {
                id: "grainy",
                name: "Grainy",
                details: "A grainy texture with a fine, granular surface, giving a raw, unrefined feel."
            },
            {
                id: "velvety",
                name: "Velvety",
                details: "A velvety texture with a soft, smooth surface that feels luxurious and plush."
            },
            {
                id: "pitted",
                name: "Pitted",
                details: "A pitted texture with small, irregular indentations across the surface, creating a worn or aged look."
            },
            {
                id: "bumpy",
                name: "Bumpy",
                details: "A bumpy texture with raised areas, creating an uneven surface with tactile variations."
            },
            {
                id: "scratched",
                name: "Scratched",
                details: "A scratched texture with visible marks and grooves, adding a distressed, rough quality."
            },
            {
                id: "peeling",
                name: "Peeling",
                details: "A peeling texture with layers that appear to be coming off or worn away, creating a weathered effect."
            }
        ]
    },
    view_composition: {
        title: 'View/Composition',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
            </svg>,
        cards: [
            {
                id: "rule_of_thirds",
                name: "Rule of Thirds",
                details: "Rule of Thirds composition with balanced, off-center focus, creating dynamic tension and visual interest with a natural flow."
            },
            {
                id: "golden_ratio",
                name: "Golden Ratio",
                details: "Golden Ratio composition with divine proportion, harmonious balance, and spiral composition, pleasing to the eye and following a natural growth pattern."
            },
            {
                id: "symmetrical",
                name: "Symmetrical",
                details: "Symmetrical composition with balanced, mirrored elements, creating a formal, stable, and ordered reflective design."
            },
            {
                id: "asymmetrical",
                name: "Asymmetrical",
                details: "Asymmetrical composition with dynamic balance, visual interest, and movement, creating tension with an unpredictable layout."
            },
            {
                id: "linear_perspective",
                name: "Linear Perspective",
                details: "Linear perspective with a vanishing point, creating the illusion of depth through converging lines and diminishing size for realistic space."
            },
            {
                id: "atmospheric_perspective",
                name: "Atmospheric Perspective",
                details: "Atmospheric perspective with fading detail, color shift, and depth through haze, creating a softer background with reduced contrast."
            },
            {
                id: "isometric",
                name: "Isometric",
                details: "Isometric composition with no perspective, using parallel lines and flat depth for a geometric, diagrammatic effect."
            },
            {
                id: "fish_eye",
                name: "Fish-eye",
                details: "Fish-eye view with distorted, curved lines, wide-angle effect, creating a spherical, bulging center for a dynamic perspective."
            },
            {
                id: "birds_eye_view",
                name: "Bird's-eye View",
                details: "Bird's-eye view with overhead perspective, looking down to create a map-like, flattened perspective with a miniature effect."
            },
            {
                id: "worms_eye_view",
                name: "Worm's-eye View",
                details: "Worm's-eye view with a perspective looking up, creating an imposing, monumental effect with exaggerated height and distorted verticals."
            },
            {
                id: "background_setting",
                name: "Background/Setting",
                details: "Background/Setting with various themes including urban, rural, fantastical, minimalist, detailed, abstract, cluttered, sparse, atmospheric, or contextual."
            }
        ]
    },
    color_palette: {
        title: 'Color Palette',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
            </svg>,
        cards: [
            {
                id: "monochromatic",
                name: "Monochromatic",
                details: "Monochromatic color palette with a single hue, featuring tonal variations for a harmonious, subtle, and unified look."
            },
            {
                id: "complementary",
                name: "Complementary",
                details: "Complementary color palette with opposite colors, creating vibrant contrast, bold, dynamic, and eye-catching effects."
            },
            {
                id: "analogous",
                name: "Analogous",
                details: "Analogous color palette with adjacent colors, providing harmonious, natural transitions and a cohesive, subtle feel."
            },
            {
                id: "triadic",
                name: "Triadic",
                details: "Triadic color palette with three evenly spaced colors, creating a vibrant, balanced, and energetic composition."
            },
            {
                id: "split_complementary",
                name: "Split-Complementary",
                details: "Split-Complementary palette with one base color and two adjacent to its complement, offering softer contrast and a rich, balanced effect."
            },
            {
                id: "warm",
                name: "Warm",
                details: "Warm color palette with reds, oranges, and yellows, evoking cozy, energetic, and inviting feelings."
            },
            {
                id: "cool",
                name: "Cool",
                details: "Cool color palette with blues, greens, and purples, creating a calm, serene, and fresh atmosphere."
            },
            {
                id: "neutral",
                name: "Neutral",
                details: "Neutral color palette with earth tones and grays, offering a subtle, balanced, and sophisticated look."
            },
            {
                id: "vibrant",
                name: "Vibrant",
                details: "Vibrant color palette with saturated, bold, and eye-catching colors, creating an energetic and lively effect."
            },
            {
                id: "muted",
                name: "Muted",
                details: "Muted color palette with desaturated, subtle colors, providing a sophisticated, understated, and atmospheric feel."
            }
        ]
    },
    artists: {
        title: 'Artists',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>,
        cards: [
            {
                id: "leonardo_da_vinci",
                name: "Leonardo da Vinci",
                details: "Leonardo da Vinci composition with precise details, harmonious balance, sfumato blending, and naturalistic, idealized forms in classical revival style",
            },
            {
                id: "michelangelo",
                name: "Michelangelo",
                details: "Michelangelo scene featuring idealized, powerful forms, dramatic poses, precise details, and a harmonious, balanced composition rooted in classical revival",
            },
            {
                id: "raphael",
                name: "Raphael",
                details: "Raphael composition with balanced harmony, naturalistic forms, idealized beauty, and precise, detailed figures in a serene, classical setting",
            },
            {
                id: "caravaggio",
                name: "Caravaggio",
                details: "Caravaggio composition with dramatic chiaroscuro, deep shadows, emotional intensity, and dynamic, swirling forms, rich in texture and movement",
            },
            {
                "id": "rembrandt",
                "name": "Rembrandt",
                "details": "Rembrandt scene with dramatic chiaroscuro, rich textures, deep shadows, and emotional, intimate portrayals of light and shadow"
            },
            {
                "id": "rubens",
                "name": "Rubens",
                "details": "Rubens composition with dynamic, swirling forms, ornate textures, emotional intensity, and a dramatic sense of movement and richness"
            },
            {
                "id": "jmw_turner",
                "name": "J.M.W. Turner",
                "details": "J.M.W. Turner landscape with dramatic atmospheric effects, vivid colors, dynamic brushwork, and sublime nature, capturing emotional intensity and the power of nature"
            },
            {
                "id": "caspar_david_friedrich",
                "name": "Caspar David Friedrich",
                "details": "Caspar David Friedrich landscape with sublime nature, emotional atmosphere, dramatic light, and intimate, individual contemplation of vast, powerful landscapes"
            },
            {
                "id": "eugene_delacroix",
                "name": "Eugène Delacroix",
                "details": "Eugène Delacroix composition with vivid color, dynamic brushwork, emotional intensity, and exotic, dramatic scenes filled with passion and movement"
            },
            {
                "id": "francisco_goya",
                "name": "Francisco Goya",
                "details": "Francisco Goya scene with emotional intensity, dramatic light, dark shadows, and an unsettling, raw portrayal of individual and societal turmoil"
            },
            {
                "id": "william_blake",
                "name": "William Blake",
                "details": "William Blake scene with emotional intensity, vivid color, and symbolic, individualist imagery in a dramatic, otherworldly setting"
            },
            {
                "id": "claude_monet",
                "name": "Claude Monet",
                "details": "Claude Monet scene with vibrant colors, loose brushwork, atmospheric light effects, broken color, and en plein air landscapes filled with natural beauty"
            },
            {
                "id": "pierre_auguste_renoir",
                "name": "Pierre-Auguste Renoir",
                "details": "Pierre-Auguste Renoir scene with loose brushwork, vibrant colors, and warm light effects, capturing everyday life in soft, atmospheric settings"
            },
            {
                "id": "edgar_degas",
                "name": "Edgar Degas",
                "details": "Edgar Degas composition with vibrant colors, loose brushwork, and dynamic movement, capturing intimate moments in everyday life"
            },
            {
                "id": "vincent_van_gogh",
                "name": "Vincent van Gogh",
                "details": "Van Gogh composition with bold, expressive brushstrokes, emotional intensity, distorted forms, and vibrant, symbolic colors in a flattened perspective"
            },
            {
                "id": "paul_gauguin",
                "name": "Paul Gauguin",
                "details": "Gauguin scene with bold colors, symbolic content, simplified forms, and emotional, expressive brushstrokes in an exotic, flattened space"
            },
            {
                "id": "paul_cezanne",
                "name": "Paul Cézanne",
                "details": "Cézanne composition with geometric simplification, bold colors, expressive brushstrokes, and flattened perspective, emphasizing structure and form"
            },
            {
                "id": "georges_seurat",
                "name": "Georges Seurat",
                "details": "Seurat scene with bold, painterly brushstrokes, precise pointillism, vibrant colors, and flattened perspective, creating a symbolic, structured composition"
            },
            {
                "id": "henri_toulouse_lautrec",
                "name": "Henri Toulouse-Lautrec",
                "details": "Toulouse-Lautrec composition with bold colors, expressive brushstrokes, simplified forms, and vibrant depictions of urban life and entertainment"
            },
            {
                "id": "edvard_munch",
                "name": "Edvard Munch",
                "details": "Munch composition with intense colors, exaggerated forms, and raw emotional impact, featuring angular shapes and subjective, distorted figures"
            },
            {
                "id": "ernst_ludwig_kirchner",
                "name": "Ernst Ludwig Kirchner",
                "details": "Kirchner scene with intense colors, distorted forms, exaggerated features, and raw emotion, expressed through angular shapes and bold, gestural brushwork"
            },
            {
                "id": "wassily_kandinsky",
                "name": "Wassily Kandinsky",
                "details": "Kandinsky composition with intense, vibrant colors, abstract, distorted forms, and emotional, expressive brushwork creating a subjective, dynamic scene"
            },
            {
                "id": "egon_schiele",
                "name": "Egon Schiele",
                "details": "Schiele composition with exaggerated, distorted figures, intense emotion, angular shapes, and raw, gestural brushwork expressing vulnerability and tension"
            },
            {
                "id": "emil_nolde",
                "name": "Emil Nolde",
                "details": "Nolde scene with vibrant, intense colors, distorted forms, exaggerated features, and raw emotional expression, conveyed through bold, gestural brushwork"
            },
            {
                "id": "henri_matisse",
                "name": "Henri Matisse",
                "details": "Matisse scene with vibrant, non-naturalistic colors, wild brushwork, simplified forms, and bold, energetic outlines, creating a highly expressive composition"
            },
            {
                "id": "andre_derain",
                "name": "André Derain",
                "details": "Derain composition with vibrant, bold colors, wild brushwork, simplified forms, and expressive, energetic paint application in a Fauvist style"
            },
            {
                "id": "maurice_de_vlaminck",
                "name": "Maurice de Vlaminck",
                "details": "Vlaminck scene with wild, expressive brushwork, vibrant, non-naturalistic colors, simplified forms, and bold, energetic application of color"
            },
            {
                "id": "raoul_dufy",
                "name": "Raoul Dufy",
                "details": "Dufy composition with vibrant, non-naturalistic colors, loose brushwork, simplified forms, and bold outlines in a light, expressive scene"
            },
            {
                "id": "georges_braque",
                "name": "Georges Braque",
                "details": "Braque Cubist composition with fragmented, geometric forms, multiple perspectives, and faceted shapes, deconstructing objects in a monochromatic palette"
            },
            {
                "id": "pablo_picasso",
                "name": "Pablo Picasso",
                "details": "Picasso Cubist scene with fragmented forms, geometric shapes, and multiple perspectives, creating a deconstructed, collage-like composition"
            },
            {
                "id": "juan_gris",
                "name": "Juan Gris",
                "details": "Gris Cubist composition with geometric forms, fragmented shapes, and multiple perspectives, arranged in a monochromatic, collage-like space"
            },
            {
                "id": "fernand_leger",
                "name": "Fernand Léger",
                "details": "Léger Cubist scene with geometric forms, fragmented shapes, bold colors, and mechanical, faceted designs in a structured, dynamic composition"
            },
            {
                "id": "robert_delaunay",
                "name": "Robert Delaunay",
                "details": "Delaunay Cubist composition with fragmented, geometric forms, bold, vibrant colors, and multiple perspectives creating a dynamic, abstract scene"
            },
            {
                "id": "salvador_dali",
                "name": "Salvador Dalí",
                "details": "Dalí surrealist scene with dreamlike imagery, hyper-realistic details, distorted proportions, and symbolic, irrational combinations invoking the unconscious mind"
            },
            {
                "id": "rene_magritte",
                "name": "René Magritte",
                "details": "Magritte surrealist composition with dreamlike, symbolic imagery, juxtaposed, irrational elements, and hyper-realistic details in a distorted, otherworldly setting"
            },
            {
                "id": "frida_kahlo",
                "name": "Frida Kahlo",
                "details": "Kahlo surrealist composition with symbolic imagery, dreamlike scenes, and distorted proportions, conveying deep emotional and psychological depth"
            },
            {
                "id": "jackson_pollock",
                "name": "Jackson Pollock",
                "details": "Pollock Abstract Expressionist composition with gestural brushwork, drips, splatters, and spontaneous, large-scale energy, expressing raw emotion"
            },
            {
                "id": "willem_de_kooning",
                "name": "Willem de Kooning",
                "details": "De Kooning Abstract Expressionist scene with gestural brushwork, emotive color, and spontaneous, energetic marks creating raw, non-representational forms"
            },
            {
                "id": "mark_rothko",
                "name": "Mark Rothko",
                "details": "Rothko Abstract Expressionist composition with large-scale fields of emotive color, spontaneous, textured surfaces, and non-representational forms evoking emotion"
            }
        ]
        
    }
}
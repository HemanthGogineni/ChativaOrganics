import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) { }

  categories = [
    { id: 'rice', name: 'Rice & Grains' },
    { id: 'millets', name: 'Millets' },
    { id: 'spices', name: 'Spices' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'personal', name: 'Personal & Hair Care' },
  ];

  selectedCategory = 'rice';
  cartItems: any[] = [];

  products = [
    {
      id: '1',
      name: 'Black Rice (1kg)',
      price: 290,
      sku: 'COBLR1KG',
      currency: 'INR',
      rating: 5.0,
      reviews: 32,
      shortDescription: 'SKU: COBLR1KG',
      longDescription: 'Tags: Forbidden rice, High protein, Anthocyanins\n₹290.00\n\nRated 5.0 out of 5\n32 reviews\n\nThe Superfood Grain of Royalty\nKnown as the “forbidden rice,” Chaitva Organics’ Black Rice is loaded with antioxidants, protein, and fiber. Its deep purple hue comes from anthocyanins, which support heart health and immunity while adding rich flavor to your meals.',
      sensoryExperience: 'Delight in its mildly sweet, nutty flavor and chewy texture. Perfect for rice bowls, puddings, or nutrient-packed side dishes.',
      image: 'black-rice.jpeg',
      category: 'rice',
      keywords: [
        'Superfoods',
        'Grains',
        'Antioxidant-rich',
        'Wellness Essentials',
        'Forbidden rice',
        'High protein',
        'Anthocyanins'
      ]
    },
    {
      id: '2',
      name: 'Red Rice (1Kg)',
      price: 120,
      sku: 'CORR1KG',
      currency: 'INR',
      rating: 4.7,
      reviews: 29,
      shortDescription: 'SKU: CORR1KG',
      longDescription: 'Tags: Iron-rich, Traditional, Whole grain\n₹120.00\n\nRated 4.7 out of 5\n29 reviews\n\nA Rustic Grain Packed with Strength\nChaitva Organics’ Red Rice is a powerhouse of iron and antioxidants, supporting better digestion and immunity. Traditionally consumed in many cultures, it’s the perfect mix of nutrition and taste for everyday cooking.',
      sensoryExperience: 'Revel in its earthy flavor and hearty bite. Ideal for preparing porridges, idlis, or paired with curries for a wholesome meal.',
      image: 'red-rice.jpeg',
      category: 'rice',
      keywords: [
        'Traditional Grains',
        'Healthy Staples',
        'Immunity Boosting',
        'High-Fiber Foods',
        'Iron-rich',
        'Traditional',
        'Whole grain'
      ]
    },
    {
      id: '3',
      name: 'Brown Rice(1kg)',
      price: 120,
      sku: 'COBR1KG',
      currency: 'INR',
      rating: 4.8,
      reviews: 43,
      shortDescription: 'SKU: COBR1KG',
      longDescription: 'Tags: Whole grain, Fiber-rich, Natural nutrition\n₹120.00\n\nRated 4.8 out of 5\n43 reviews\n\nWholesome Goodness in Every Grain\nChaitva Organics’ Brown Rice is unpolished and naturally rich in fiber, vitamins, and minerals. It supports digestion, balances energy release, and makes a hearty base for your everyday meals. Packed straight from organic farms, it brings earthy flavor and nourishment to your plate.',
      sensoryExperience: 'Enjoy the nutty aroma and firm texture with every bite. Pairs well with curries, stir-fries, or as a healthier alternative to white rice for daily meals.',
      image: 'brown-rice.jpeg',
      category: 'rice',
      keywords: [
        'Grains',
        'Organic Staples',
        'Everyday Essentials',
        'Gluten-Free',
        'Healthy Eating',
        'Whole grain',
        'Fiber-rich',
        'Natural nutrition'
      ]
    },
    {
      id: '4',
      name: 'Kerala Vadi Matta Rice(1Kg)',
      price: 120,
      sku: 'COKVMR1KG',
      currency: 'INR',
      rating: 4.8,
      reviews: 22,
      shortDescription: 'SKU: COKVMR1KG',
      longDescription: 'Tags: Aromatic, Traditional, Kerala Cuisine\n₹120.00\n\nRated 4.8 out of 5\n22 reviews\n\nAuthentic Taste of Kerala in Every Grain\nChaitva Organics’ Kerala Vadi Mattai Rice is a fragrant, long-grained rice variety prized for its distinctive flavor and soft texture. Sourced directly from traditional farms, it’s the perfect base for Kerala-style curries and festive meals.',
      sensoryExperience: 'Breathe in the mild aroma and relish the fluffy, tender grains. A staple for occasions and everyday cooking alike.',
      image: 'kerala-rice.jpeg',
      category: 'rice',
      keywords: [
        'Traditional Grains',
        'Organic Staples',
        'South Indian Specialties',
        'Aromatic',
        'Traditional',
        'Kerala Cuisine'
      ]
    },
    {
      id: '5',
      name: 'Pepper(100 Grams)',
      price: 168,
      sku: 'COBP100GM',
      currency: 'INR',
      rating: 5.0,
      reviews: 40,
      shortDescription: 'SKU: COBP100GM',
      longDescription: 'Tags: Piperine, Aromatic, Sharp heat\n₹168.00\n\nRated 5.0 out of 5\n40 reviews\n\nThe King of Spices\nChaitva Organics’ Black Pepper is bold, aromatic, and packed with piperine for immunity and digestion support. A must-have spice in every kitchen.',
      sensoryExperience: 'Pungent aroma with a sharp, spicy kick. Ideal for seasoning dishes and enhancing flavor.',
      image: 'black-pepper.jpeg',
      category: 'spices',
      keywords: [
        'Spices',
        'Immunity Boosters',
        'Everyday Essentials',
        'Piperine',
        'Aromatic',
        'Sharp heat'
      ]
    },
    {
      id: '6',
      name: 'Cumin (100 Grams)',
      price: 95,
      sku: 'COCS100GM',
      currency: 'INR',
      rating: 4.8,
      reviews: 26,
      shortDescription: 'SKU: COCS100GM',
      longDescription: 'Tags: Aromatic, Cooling, Digestive\n₹95.00\n\nRated 4.8 out of 5\n26 reviews\n\nAromatic Seeds for Flavor & Wellness\nChaitva Organics’ Cumin Seeds are farm-fresh and naturally aromatic. Known for their digestive benefits, they add warmth and earthy flavor to Indian cooking.',
      sensoryExperience: 'Nutty, peppery aroma with a sharp taste. Best for tempering curries, dals, or spiced rice.',
      image: 'cumin.jpeg',
      category: 'spices',
      keywords: [
        'Spices',
        'Kitchen Essentials',
        'Digestive Aids',
        'Aromatic',
        'Cooling',
        'Digestive'
      ]
    },
    {
      id: '7',
      name: 'Turmeric (200 Grams)',
      price: 189,
      sku: 'COTP200GM',
      currency: 'INR',
      rating: 5.0,
      reviews: 41,
      shortDescription: 'SKU: COTP200GM',
      longDescription: 'Tags: Curcumin, Golden spice, Healing\n₹189.00\n\nRated 5.0 out of 5\n41 reviews\n\nThe Golden Healer of Every Kitchen\nChaitva Organics’ Turmeric Powder is pure, potent, and loaded with curcumin. It strengthens immunity, reduces inflammation, and adds vibrant flavor to your dishes.',
      sensoryExperience: 'Bright yellow color with a warm, earthy aroma. Enhances curries, lattes, and everyday cooking',
      image: 'Turmeric.jpeg',
      category: 'spices',
      keywords: [
        'Spices',
        'Ayurvedic Essentials',
        'Immunity Boosters',
        'Curcumin',
        'Golden spice',
        'Healing'
      ]
    },
    {
      id: '8',
      name: 'Coriander (100 Grams)',
      price: 84,
      sku: 'COCORS100GM',
      currency: 'INR',
      rating: 4.7,
      reviews: 21,
      shortDescription: 'SKU: COCORS100GM',
      longDescription: 'Tags: Fragrant, Cooling, Detox\n₹84.00\n\nRated 4.7 out of 5\n21 reviews\n\nFragrant & Flavorful Kitchen Staple\nChaitva Organics’ Coriander Seeds are sun-dried for maximum aroma and flavor. Known to aid digestion and detox, they are a must-have spice for daily cooking.',
      sensoryExperience: 'Citrusy, sweet aroma with a mild taste. Ideal for spice blends, curries, and pickles.',
      image: 'corriander.jpeg',
      category: 'spices',
      keywords: [
        'Spices',
        'Everyday Essentials',
        'Cooling Herbs',
        'Fragrant',
        'Cooling',
        'Detox'
      ]
    },
    {
      id: '9',
      name: 'Cinnamon (100 Grams)',
      price: 95,
      sku: 'COCIN100GM',
      currency: 'INR',
      rating: 5.0,
      reviews: 31,
      shortDescription: 'SKU: COCIN100GM',
      longDescription: 'Tags: Sweet spice, Aromatic, Warmth\n₹95.00\n\nRated 5.0 out of 5\n31 reviews\n\nThe Sweet Spice of Comfort\nChaitva Organics’ Cinnamon Sticks are pure, fragrant, and full of natural oils. A versatile spice that enhances both sweet and savory dishes.',
      sensoryExperience: 'Sweet, woody aroma with a warm flavor. Perfect for curries, teas, and desserts.',
      image: 'cinnamon.jpeg',
      category: 'spices',
      keywords: [
        'Spices',
        'Ayurvedic Essentials',
        'Baking Must-Haves',
        'Sweet spice',
        'Aromatic',
        'Warmth'
      ]
    },
    {
      id: '10',
      name: 'Chilli Flakes (200 Grams)',
      price: 189,
      sku: 'COCHF200GM',
      currency: 'INR',
      rating: 4.8,
      reviews: 24,
      shortDescription: 'SKU: COCHF200GM',
      longDescription: 'Tags: Spicy, Zesty, Fiery flavor\n₹189.00\n\nRated 4.8 out of 5\n24 reviews\n\nAdd a Kick to Every Dish\nChaitva Organics’ Chilli Flakes are sun-dried, crushed, and packed to perfection. A sprinkle elevates pizzas, pastas, and curries with fiery zest.',
      sensoryExperience: 'Aromatic, sharp heat that lingers on the palate. Perfect for seasoning or garnishing.',
      image: 'chill-fkakes.jpeg',
      category: 'spices',
      keywords: [
        'Spices',
        'Kitchen Essentials',
        'Flavor Enhancers',
        'Spicy',
        'Zesty',
        'Fiery flavor'
      ]
    },
    {
      id: '11',
      name: 'Coffee Mix (200 Grams)',
      price: 419,
      sku: 'COCP200GM',
      currency: 'INR',
      rating: 5.0,
      reviews: 44,
      shortDescription: 'SKU: COCP200GM',
      longDescription: 'Tags: Aromatic, Strong brew, Energy booster\n₹419.00\n\nRated 5.0 out of 5\n44 reviews\n\nAwaken with Every Sip\nChaitva Organics’ Coffee Powder is made from premium beans roasted to perfection. It delivers an intense aroma and rich flavor that energizes your mornings.',
      sensoryExperience: 'Strong, earthy aroma with a smooth finish. Perfect for filter coffee or black coffee lovers.',
      image: 'coffee-powder.jpeg',
      category: 'beverages',
      keywords: [
        'Beverages',
        'Morning Essentials',
        'Energizers',
        'Aromatic',
        'Strong brew',
        'Energy booster'
      ]
    },
    {
      id: '12',
      name: 'Tea Mix (200 Grams)',
      price: 209,
      sku: 'COTP200GM',
      currency: 'INR',
      rating: 4.9,
      reviews: 37,
      shortDescription: 'SKU: COTP200GM',
      longDescription: 'Tags: Aromatic, Energy, Morning ritual\n₹209.00\n\nRated 4.9 out of 5\n37 reviews\n\nStart Your Day with Rich Aroma & Energy\nChaitva Organics’ Tea Powder is carefully processed to preserve natural flavor and aroma. Brew a strong, refreshing cup that awakens your senses.',
      sensoryExperience: 'Bold aroma with a smooth, full-bodied taste. Best enjoyed with milk or as a spiced chai.',
      image: 'Tea-powder.jpeg',
      category: 'beverages',
      keywords: [
        'Beverages',
        'Everyday Essentials',
        'Refreshments',
        'Aromatic',
        'Energy',
        'Morning ritual'
      ]
    },
    {
      id: '13',
      name: 'Little Millet (500 Grams)',
      price: 110,
      sku: 'COLM500GM',
      currency: 'INR',
      rating: 4.9,
      reviews: 35,
      shortDescription: 'SKU: COLM500GM',
      longDescription: 'Tags: Diabetic-friendly, Protein-rich, Light grain\n₹100.00\n\nRated 4.9 out of 5\n35 reviews\n\nThe Perfect Light & Nutritious Millet\nChaitva Organics’ Little Millet is a light, easy-to-digest grain, perfect for weight management and diabetic-friendly diets. Rich in B-vitamins and minerals, it helps boost energy and supports overall wellness.',
      sensoryExperience: 'Soft texture and mild flavor make it ideal for porridge, upma, or rice alternatives in everyday meals.',
      image: 'Little-millet.jpeg',
      category: 'millets',
      keywords: [
        'Millets',
        'Gluten-Free Staples',
        'Healthy Eating',
        'Superfoods',
        'Diabetic-friendly',
        'Protein-rich',
        'Light grain'
      ]
    },
    {
      id: '14',
      name: 'Kodo Millet (500 Grams)',
      price: 120,
      sku: null,
      currency: 'INR',
      rating: null,
      reviews: null,
      shortDescription: null,
      longDescription: null,
      sensoryExperience: null,
      image: 'prod-6.jpeg',
      category: 'millets',
      keywords: []
    },
    {
      id: '14',
      name: 'Foxtail Millet (500 Grams)',
      price: 80,
      sku: 'COFM500GM',
      currency: 'INR',
      rating: 4.7,
      reviews: 28,
      shortDescription: 'SKU: COFM500GM',
      longDescription: 'Tags: Low glycemic, Ancient grain, Wholesome\n₹80.00\n\nRated 4.7 out of 5\n28 reviews\n\nA Time-Tested Super Grain\nChaitva Organics’ Foxtail Millet is a low-glycemic grain rich in iron and calcium, perfect for heart health and diabetes management. Its versatility makes it a smart choice for modern kitchens rooted in tradition.',
      sensoryExperience: 'Nutty taste with a light, fluffy texture when cooked. Ideal for dosas, pulao, or as a healthy rice substitute.',
      image: 'foxtail.jpeg',
      category: 'millets',
      keywords: [
        'Millets',
        'Gluten-Free Grains',
        'Superfoods',
        'Everyday Wellness',
        'Low glycemic',
        'Ancient grain',
        'Wholesome'
      ]
    },
    {
      id: '15',
      name: 'Barnyard Millet (500 Grams)',
      price: 120,
      sku: 'COBYM500GM',
      currency: 'INR',
      rating: 4.8,
      reviews: 21,
      shortDescription: 'SKU: COBYM500GM',
      longDescription: 'Tags: Detox, Gluten-free, High energy\n₹120.00\n\nRated 4.8 out of 5\n21 reviews\n\nCleanse and Energize with Nature’s Millet\nBarnyard Millet from Chaitva Organics is rich in fiber and iron, making it ideal for detox diets and fasting meals. It balances digestion while providing a steady source of energy.',
      sensoryExperience: 'Light, fluffy, and mildly sweet when cooked. Perfect for khichdi, pongal, or porridge.',
      image: 'barnyard-millet.jpeg',
      category: 'millets',
      keywords: [
        'Millets',
        'High-Fiber Foods',
        'Fasting-Friendly',
        'Superfoods',
        'Detox',
        'Gluten-free',
        'High energy'
      ]
    },
    {
      id: '16',
      name: 'Lip Balm - Strawberry(5 Grams)',
      price: 166,
      sku: 'COSLB5',
      currency: 'INR',
      rating: 4.8,
      reviews: 19,
      shortDescription: 'SKU: COSLB5',
      longDescription: 'Tags: Portable, Fruity, Nourishing\n₹166.00\n\nRated 4.8 out of 5\n19 reviews\n\nPocket-Friendly Lip Protection\nSame nourishing strawberry formula in a smaller, travel-friendly pack. Keeps lips soft and hydrated wherever you go.',
      sensoryExperience: 'Light, fruity scent with a smooth glide. Perfect for daily use.',
      image: 'prod-13.jpeg',
      category: 'personal',
      keywords: [
        'Lip Care',
        'Skincare',
        'Natural Balms',
        'Portable',
        'Fruity',
        'Nourishing'
      ]
    },
    {
      id: '16',
      name: 'Lip Balm - Strawberry(10 Grams)',
      price: 259,
      sku: 'COSLB10',
      currency: 'INR',
      rating: 4.9,
      reviews: 27,
      shortDescription: 'SKU: COSLB10',
      longDescription: 'Tags: Moisturizing, Fruity, Protective\n₹259.00\n\nRated 4.9 out of 5\n27 reviews\n\nSweet Care for Your Lips\nEnriched with natural butters and strawberry essence, this lip balm locks in moisture and prevents chapping.',
      sensoryExperience: 'Fruity aroma with a soft, buttery texture. Leaves lips smooth and lightly glossy.',
      image: 'prod-13.jpeg',
      category: 'personal',
      keywords: [
        'Lip Care',
        'Skincare',
        'Natural Balms',
        'Moisturizing',
        'Fruity',
        'Protective'
      ]
    },
    {
      id: '17',
      name: 'Lip Balm - Beetroot(5 Grams)',
      price: 166,
      sku: 'COBLB5',
      currency: 'INR',
      rating: 4.9,
      reviews: 22,
      shortDescription: 'SKU: COBLB5',
      longDescription: 'Tags: Natural tint, Hydrating, Herbal\n₹166.00\n\nRated 4.9 out of 5\n22 reviews\n\nTinted Care with Beetroot Goodness\nThis lip balm blends beetroot extract with natural butters to hydrate and add a subtle rosy tint.',
      sensoryExperience: 'Creamy texture with a light earthy-sweet scent. Leaves lips soft with a natural flush of color.',
      image: 'lpbalm-beetroot.jpeg',
      category: 'personal',
      keywords: [
        'Lip Care',
        'Skincare',
        'Natural Balms',
        'Natural tint',
        'Hydrating',
        'Herbal'
      ]
    },
    {
      id: '18',
      name: 'Loofah',
      price: 55,
      sku: 'COLOO',
      currency: 'INR',
      rating: 4.7,
      reviews: 20,
      shortDescription: 'SKU: COLOO',
      longDescription: 'Tags: Exfoliating, Natural fiber, Sustainable\n₹55.00\n\nRated 4.7 out of 5\n20 reviews\n\nNatural Exfoliation for Radiant Skin\nChaitva Organics’ Loofah is made from natural plant fibers. It gently exfoliates, removes dead skin, and stimulates circulation for glowing skin.',
      sensoryExperience: 'Slightly coarse texture that softens when wet. Leaves skin smooth and refreshed.',
      image: 'loofah.jpeg',
      category: 'personal',
      keywords: [
        'Personal Care',
        'Bath Essentials',
        'Eco-Friendly',
        'Exfoliating',
        'Natural fiber',
        'Sustainable'
      ]
    },
    {
      id: '19',
      name: 'Bamboo Tooth Brush',
      price: 58,
      sku: 'COTBNEEM',
      currency: 'INR',
      rating: 4.6,
      reviews: 18,
      shortDescription: 'SKU: COTBNEEM',
      longDescription: 'Tags: Natural, Sustainable, Herbal care\n₹58.00\n\nRated 4.6 out of 5\n18 reviews\n\nGentle Oral Care the Natural Way\nChaitva Organics’ Neem Toothbrush is eco-friendly and naturally antibacterial. It supports oral hygiene without harsh chemicals or plastics.',
      sensoryExperience: 'Soft bristles with a refreshing herbal feel, leaving your mouth clean and fresh.',
      image: 'prod-8.jpeg',
      category: 'personal',
      keywords: [
        'Personal Care',
        'Oral Care',
        'Eco-Friendly',
        'Natural',
        'Sustainable',
        'Herbal care'
      ]
    },
    {
      id: '20',
      name: 'Pocket Comb',
      price: 63,
      sku: 'COPNC',
      currency: 'INR',
      rating: 4.8,
      reviews: 19,
      shortDescription: 'SKU: COPNC',
      longDescription: 'Tags: Portable, Herbal, Anti-static\n₹63.00\n\nRated 4.8 out of 5\n19 reviews\n\nNeem Protection On-the-Go\nA compact neem comb designed for travel. Provides the same scalp-friendly, anti-dandruff benefits of neem in a portable size.',
      sensoryExperience: 'Lightweight, smooth, and easy to carry. Keeps your hair tangle-free naturally.',
      image: 'pocket-comb.jpeg',
      category: 'personal',
      keywords: [
        'Personal Care',
        'Hair Tools',
        'Travel-Friendly',
        'Portable',
        'Herbal',
        'Anti-static'
      ]
    },
    {
      id: '21',
      name: 'Ayurvedic Hair Oil Mix ',
      price: 189,
      sku: 'COAHO',
      currency: 'INR',
      rating: 4.8,
      reviews: 30,
      shortDescription: 'SKU: COAHO',
      longDescription: 'Tags: Ayurvedic, Hair growth, Strengthening\n₹189.00\n\nRated 4.8 out of 5\n30 reviews\n\nStrengthen & Restore with Ayurveda\nThis Ayurvedic Hair Oil Mix is a potent blend of traditional herbs and oils that nourish the scalp, reduce hair fall, and promote regrowth.',
      sensoryExperience: 'Light, earthy aroma with a cooling sensation. Absorbs well, leaving hair strong and glossy.',
      image: 'prod-2.jpeg',
      category: 'personal',
      keywords: [
        'Hair Care',
        'Oils',
        'Traditional Remedies',
        'Ayurvedic',
        'Hair growth',
        'Strengthening'
      ]
    },
    {
      id: '22',
      name: 'Eucalyptus Oil ',
      price: 267,
      sku: 'COEO',
      currency: 'INR',
      rating: 5.0,
      reviews: 33,
      shortDescription: 'SKU: COEO',
      longDescription: 'Tags: Soothing, Anti-inflammatory, Healing\n₹267.00\n\nRated 5.0 out of 5\n33 reviews\n\nNature’s Breathe-Easy Oil\nChaitva Organics’ Eucalyptus Oil is pure and potent, ideal for aromatherapy, cold relief, and muscle relaxation. Known for its cooling, soothing properties.',
      sensoryExperience: 'Strong, refreshing aroma with a cooling sensation. Perfect for steam inhalation, massage, or diffuser use.',
      image: 'prod-6.jpeg',
      category: 'personal',
      keywords: [
        'Essential Oils',
        'Wellness',
        'Aromatherapy',
        'Soothing',
        'Anti-inflammatory',
        'Healing'
      ]
    },
    {
      id: '23',
      name: 'Organic Soap (Natural Sandalwood)',
      price: 107,
      sku: 'COSWS',
      currency: 'INR',
      rating: 4.9,
      reviews: 29,
      shortDescription: 'SKU: COSWS',
      longDescription: 'Tags: Aromatic, Calming, Traditional care\n₹107.00\n\nRated 4.9 out of 5\n29 reviews\n\nThe Essence of Calm & Tradition\nChaitva Organics’ Sandalwood Soap is infused with pure sandalwood oil for a calming, aromatic bathing experience. It nourishes skin while leaving a lingering fragrance.',
      sensoryExperience: 'Rich aroma with creamy lather. Promotes relaxation and leaves skin silky smooth.',
      image: 'sandlewood.jpeg',
      category: 'personal',
      keywords: [
        'Personal Care',
        'Herbal Soaps',
        'Skincare',
        'Aromatic',
        'Calming',
        'Traditional care'
      ]
    },
    {
      id: '24',
      name: 'Organic Soap (Natural Aloevera)',
      price: 107,
      sku: 'COAVS',
      currency: 'INR',
      rating: 4.8,
      reviews: 25,
      shortDescription: 'SKU: COAVS',
      longDescription: 'Tags: Moisturizing, Cooling, Gentle care\n₹107.00\n\nRated 4.8 out of 5\n25 reviews\n\nGentle Nourishment with Aloe Goodness\nChaitva Organics’ Aloe Vera Soap hydrates, soothes, and refreshes your skin. Enriched with aloe extracts for everyday gentle care.',
      sensoryExperience: 'Soft lather with a cooling feel. Leaves your skin refreshed, smooth, and moisturized.',
      image: 'prod-10.jpeg',
      category: 'personal',
      keywords: [
        'Personal Care',
        'Herbal Soaps',
        'Skincare',
        'Moisturizing',
        'Cooling',
        'Gentle care'
      ]
    },
    {
      id: '25',
      name: 'Herbal Shampoo (100 ML)',
      price: 353,
      sku: 'COHS',
      currency: 'INR',
      rating: 4.7,
      reviews: 38,
      shortDescription: 'SKU: COHS',
      longDescription: 'Tags: Anti-hair fall, Natural shine, Herbal\n₹353.00\n\nRated 4.7 out of 5\n38 reviews\n\nNature’s Answer to Healthy Hair\nChaitva Organics’ Herbal Shampoo is enriched with natural extracts that reduce hair fall, cleanse gently, and restore natural shine.',
      sensoryExperience: 'Foams softly with a refreshing herbal aroma. Leaves hair soft, bouncy, and fresh.',
      image: 'prod-11.jpeg',
      category: 'personal',
      keywords: [
        'Hair Care',
        'Herbal Blends',
        'Everyday Essentials',
        'Anti-hair fall',
        'Natural shine',
        'Herbal'
      ]
    },
    {
      id: '26',
      name: 'Dual Bristled Neem Comb',
      price: 126,
      sku: 'CODNC',
      currency: 'INR',
      rating: 4.9,
      reviews: 27,
      shortDescription: 'SKU: CODNC',
      longDescription: 'Tags: Anti-dandruff, Scalp health, Sustainable\n₹126.00\n\nRated 4.9 out of 5\n27 reviews\n\nHealthy Hair with Neem Care\nCrafted from neem wood, this dual-bristled comb prevents dandruff, promotes scalp circulation, and reduces static. A natural alternative to plastic combs.',
      sensoryExperience: 'Smooth finish with a calming herbal scent. Glides gently through hair without breakage.',
      image: 'prod-14.jpeg',
      category: 'personal',
      keywords: [
        'Personal Care',
        'Hair Tools',
        'Eco-Friendly',
        'Anti-dandruff',
        'Scalp health',
        'Sustainable'
      ]
    }
  ]

  searchText: string = '';

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || '';
      this.searchText = params['search'] || '';
    });
  }

  addToCart(product: any) {
    const itemWithQuantity = { ...product, quantity: 1 };
    this.cartService.addToCart(itemWithQuantity);
    // this.router.navigate(['/cart']);
  }


  get filteredProducts() {
    return this.products.filter(p =>
      (this.selectedCategory ? p.category === this.selectedCategory : true) &&
      (this.searchText ? p.name.toLowerCase().includes(this.searchText.toLowerCase()) : true)
    );
  }

  // ✅ when category clicked, update query params
  applyCategory(category: string) {
    if (this.selectedCategory === category) {
      category = '';
      this.router.navigate(["/products"]);
    }
    this.router.navigate(["/products"], { queryParams: { category } });
  }

  isInCart(productId: string): boolean {
    return this.cartItems.some(item => item.id === productId);
  }
}

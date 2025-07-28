# MediClue - AI-Powered Medical Symptom Checker

MediClue is a comprehensive MERN stack application with Flask backend and Machine Learning integration that helps users identify potential health conditions based on their symptoms and connects them with nearby healthcare providers.

## 🚀 Features

### Core Functionality
- **AI-Powered Symptom Analysis**: Advanced ML model using Random Forest algorithm
- **Disease Prediction**: Get potential conditions with confidence scores
- **Personalized Recommendations**: Tailored remedies and treatment suggestions
- **Hospital Finder**: Locate nearby healthcare providers by specialty
- **Secure Authentication**: Clerk-powered user authentication

### Technical Stack
- **Frontend**: React.js with TypeScript, Tailwind CSS
- **Backend**: Flask (Python) with ML integration
- **Database**: MongoDB (for user data and medical records)
- **ML Model**: Scikit-learn Random Forest Classifier
- **Authentication**: Clerk
- **API**: RESTful API with comprehensive endpoints

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MongoDB (local or cloud)

### Frontend Setup
1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Copy .env.example to .env and update with your keys
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
VITE_API_URL=http://localhost:5000
```

### Flask Backend Setup
1. Navigate to Flask backend:
```bash
cd flask_backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. The ML model will be automatically created on first run

### Running the Application

#### Development Mode (Both Frontend & Backend)
```bash
npm run dev:full
```

#### Individual Services
```bash
# Frontend only
npm run dev

# Flask backend only
npm run flask
```

## 🧠 Machine Learning Model

### Model Architecture
- **Algorithm**: Random Forest Classifier
- **Features**: Binary symptom vectors
- **Training Data**: Medical symptom-disease mappings
- **Accuracy**: Continuously improving with more data

### Supported Conditions
- Common Cold
- Flu (Influenza)
- Migraine
- Viral Infections
- Asthma
- Gastroenteritis
- Hypertension
- Upper Respiratory Infections
- Anxiety Disorders
- Arthritis

### Symptoms Database
The system recognizes 10+ common symptoms including:
- Fever, Headache, Cough, Fatigue
- Shortness of breath, Nausea, Dizziness
- Muscle pain, Joint pain, Chest pain

## 📡 API Endpoints

### Health & Status
- `GET /api/health` - API health check
- `GET /api/symptoms` - Get all available symptoms

### Disease Prediction
- `POST /api/predict` - Predict diseases from symptoms
- `GET /api/disease/{name}` - Get detailed disease information

### Hospital Services
- `GET /api/hospitals` - Get all hospitals
- `GET /api/hospitals?specialty={type}` - Filter by specialty
- `POST /api/hospitals/nearby` - Find nearby hospitals

## 🔐 Security Features

- **Clerk Authentication**: Secure user management
- **Data Privacy**: HIPAA-compliant data handling
- **Encrypted Storage**: Secure symptom and health data
- **Session Management**: Secure user sessions

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Intuitive Interface**: Easy symptom input and navigation
- **Real-time Search**: Smart symptom matching
- **Visual Feedback**: Progress indicators and loading states
- **Accessibility**: WCAG compliant design

## 📱 User Journey

1. **Authentication**: Secure sign-in with Clerk
2. **Symptom Input**: Describe symptoms using natural language
3. **AI Analysis**: ML model processes symptoms
4. **Results**: View potential conditions with confidence scores
5. **Recommendations**: Get remedies and specialist suggestions
6. **Hospital Finder**: Locate nearby healthcare providers

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
```

### Backend (Heroku/Railway)
```bash
# Deploy Flask app with requirements.txt
```

### Environment Variables for Production
```bash
VITE_CLERK_PUBLISHABLE_KEY=your_production_clerk_key
VITE_API_URL=your_production_api_url
MONGODB_URI=your_mongodb_connection_string
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## ⚠️ Medical Disclaimer

MediClue is for informational purposes only and should not replace professional medical advice. Always consult with a healthcare professional for proper diagnosis and treatment.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email contact@mediclue.com or create an issue in the repository.

---

**Built with ❤️ for better healthcare accessibility**
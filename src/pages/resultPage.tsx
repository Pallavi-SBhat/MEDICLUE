import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ThumbsUp, Guitar as Hospital, ArrowRight, Home } from 'lucide-react';

interface Symptom {
  _id: string;
  name: string;
  description: string;
  bodyPart: string;
  severity: string;
}

interface Remedy {
  title: string;
  description: string;
}

interface Disease {
  _id: string;
  name: string;
  description: string;
  symptoms: Symptom[];
  remedies: Remedy[];
  severity: string;
  specialistType: string;
  matchScore: number;
}

interface MedicalData {
  symptoms: Symptom[];
  age: string;
  gender: string;
  duration: string;
}

const ResultsPage = () => {
  const [medicalData, setMedicalData] = useState<MedicalData | null>(null);
  const [potentialDiseases, setPotentialDiseases] = useState<Disease[]>([]);
  
  // Mock data until backend is connected
  const mockDiseases: Disease[] = [
    {
      _id: '1',
      name: 'Common Cold',
      description: 'A viral infection of the upper respiratory tract that primarily affects the nose and throat.',
      symptoms: [
        { _id: '2', name: 'Fever', description: 'Elevated body temperature', bodyPart: 'whole body', severity: 'moderate' },
        { _id: '3', name: 'Cough', description: 'Sudden expulsion of air from the lungs', bodyPart: 'respiratory', severity: 'mild' },
        { _id: '4', name: 'Fatigue', description: 'Feeling of tiredness or exhaustion', bodyPart: 'whole body', severity: 'mild' }
      ],
      remedies: [
        { title: 'Rest', description: 'Get plenty of sleep and rest to help your body fight the infection.' },
        { title: 'Hydration', description: 'Drink plenty of fluids, especially water, to stay hydrated.' },
        { title: 'Over-the-counter medications', description: 'Take acetaminophen or ibuprofen to relieve pain and reduce fever.' }
      ],
      severity: 'mild',
      specialistType: 'General Practitioner',
      matchScore: 85
    },
    {
      _id: '2',
      name: 'Flu (Influenza)',
      description: 'A contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs.',
      symptoms: [
        { _id: '2', name: 'Fever', description: 'Elevated body temperature', bodyPart: 'whole body', severity: 'moderate' },
        { _id: '3', name: 'Cough', description: 'Sudden expulsion of air from the lungs', bodyPart: 'respiratory', severity: 'mild' },
        { _id: '4', name: 'Fatigue', description: 'Feeling of tiredness or exhaustion', bodyPart: 'whole body', severity: 'mild' },
        { _id: '7', name: 'Dizziness', description: 'Feeling faint, woozy, or unsteady', bodyPart: 'head', severity: 'moderate' }
      ],
      remedies: [
        { title: 'Rest and sleep', description: 'Stay home and rest, especially during the first 24-48 hours.' },
        { title: 'Hydration', description: 'Drink clear fluids like water, broth, or sports drinks.' },
        { title: 'Pain relievers', description: 'Take acetaminophen or ibuprofen to relieve fever and aches.' }
      ],
      severity: 'moderate',
      specialistType: 'General Practitioner',
      matchScore: 68
    }
  ];

  useEffect(() => {
    // Get data from session storage
    const storedData = sessionStorage.getItem('medicalData');
    if (storedData) {
      setMedicalData(JSON.parse(storedData));
      
      // In a real app, this would call an API with the symptoms
      // For now, just use mock data
      setPotentialDiseases(mockDiseases);
    }
  }, []);

  if (!medicalData) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No symptom data found</h2>
          <p className="text-gray-600 mb-6">
            You need to complete the symptom checker first to see results.
          </p>
          <Link 
            to="/symptom-checker" 
            className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Symptom Checker
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full">
            <AlertTriangle className="h-8 w-8 text-blue-600" />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Your Results
            </h1>
            <p className="text-gray-500">
              Based on: {medicalData.symptoms.map(s => s.name).join(', ')}
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-800 font-medium">
            Medical Disclaimer: This is not a medical diagnosis. Always consult with a healthcare professional about your symptoms.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Potential Conditions</h2>
          
          {potentialDiseases.length === 0 ? (
            <p className="text-gray-600">No matching conditions found for your symptoms.</p>
          ) : (
            <div className="space-y-6">
              {potentialDiseases.map(disease => (
                <div 
                  key={disease._id} 
                  className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{disease.name}</h3>
                    <div className="bg-blue-100 text-blue-800 text-sm font-medium py-1 px-3 rounded-full">
                      {disease.matchScore}% match
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{disease.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Common Symptoms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {disease.symptoms.map(symptom => (
                        <span 
                          key={symptom._id}
                          className={`text-xs py-1 px-2 rounded-full ${
                            medicalData.symptoms.some(s => s._id === symptom._id)
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {symptom.name}
                          {medicalData.symptoms.some(s => s._id === symptom._id) && (
                            <ThumbsUp className="inline ml-1 h-3 w-3" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Home Remedies:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {disease.remedies.map((remedy, index) => (
                        <li key={index}><span className="font-medium">{remedy.title}:</span> {remedy.description}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Severity: </span>
                      <span className={`text-sm font-medium ${
                        disease.severity === 'mild' ? 'text-green-600' : 
                        disease.severity === 'moderate' ? 'text-yellow-600' : 
                        'text-red-600'
                      }`}>
                        {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)}
                      </span>
                    </div>
                    <Link
                      to="/hospitals"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      Find {disease.specialistType}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/symptom-checker" 
            className="bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Symptom Checker
          </Link>
          <Link 
            to="/hospitals" 
            className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            <Hospital className="mr-2 h-5 w-5" />
            Find Hospitals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
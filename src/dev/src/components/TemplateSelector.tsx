import React from 'react';
import { templateTypes } from '../data/mockData';
import './TemplateSelector.css';

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  selectedTemplate, 
  onSelectTemplate 
}) => {
  return (
    <div className="template-selector">
      <h2>Components</h2>
      <ul className="template-list">
        {templateTypes.map((template) => (
          <li 
            key={template.id}
            className={`template-item ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => onSelectTemplate(template.id)}
          >
            {template.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateSelector; 
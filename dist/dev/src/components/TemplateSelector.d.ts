import React from 'react';
import './TemplateSelector.css';
interface TemplateSelectorProps {
    selectedTemplate: string;
    onSelectTemplate: (templateId: string) => void;
}
declare const TemplateSelector: React.FC<TemplateSelectorProps>;
export default TemplateSelector;

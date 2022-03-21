import React from 'react';
import { DocumentAndMediaComponent }  from './components/DocumentsComponent/DocumentsAndMedia';
import { KnowledgeComponent } from './components/Knowledge/KnowledgeComponent';
import { TagComponent } from './components/Tags/TagComponent';

export function App() {
	return (
		<>
		
		<TagComponent/>
		<DocumentAndMediaComponent/>
		<KnowledgeComponent/>
		
		</>
	);
}

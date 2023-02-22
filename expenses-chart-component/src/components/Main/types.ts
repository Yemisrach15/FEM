export interface FlexProps {
	$direction: 'row' | 'column';
	alignItems: 'center' | 'flex-start' | 'flex-end';
	justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between';
	gap?: string;
}

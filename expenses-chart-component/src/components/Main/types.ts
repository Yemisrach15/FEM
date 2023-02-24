export interface FlexProps {
	$direction: Directions[];
	$alignItems:  Alignments[];
	$justifyContent: Alignments[];
	$gap?: string [];
}

export interface ParagraphProps {
	$color?: string;
	$fontSize?: string;
	$fontWeight?: string;
	$textAlign?: string;
}

type Directions = 'row' | 'column';
type Alignments = 'center' | 'flex-start' | 'flex-end' | 'space-between';

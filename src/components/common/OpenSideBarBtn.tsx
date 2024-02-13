import React from 'react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SidebarPopup from './SidebarPopup';

interface OpenSideBarBtnProps {
	ButtonText: string;
	ClassNames: string;
}

export default function OpenSideBarBtn({ ButtonText, ClassNames }: OpenSideBarBtnProps) {
	return (
		<Sheet>
			<SheetTrigger className={ClassNames}>{ButtonText}</SheetTrigger>
			<SheetContent className="border-none">
				<SidebarPopup />
			</SheetContent>
		</Sheet>
	);
}

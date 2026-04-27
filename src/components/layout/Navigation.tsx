import DesktopNav from "@/components/layout/nav/DesktopNav";
import MobileNav from "@/components/layout/nav/MobileNav";

/** Render nav elements based on CSS breakpoint. */
export default function Navigation() {
	return (
		<>
			<MobileNav />
			<DesktopNav />
		</>
	);
}

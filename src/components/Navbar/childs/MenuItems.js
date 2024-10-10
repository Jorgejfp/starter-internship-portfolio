import React, {useState,useEffect,memo} from "react";
const MenuItems = (props) => {

    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleItemClick = (index) => {
            setActiveMenuItem(index)
            scrollToSection(index)
        };


    const scrollToSection = (index) => {
        const sectionId = props.sectionsData[index].title.toLowerCase();
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("data-index");
                    if (sectionId) {
                        setActiveMenuItem(parseInt(sectionId, 10));
                    }
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px" });

        const paragraphElements = document.querySelectorAll("section");
        paragraphElements.forEach((element, index) => {
            element.setAttribute("data-index", index);
            observer.observe(element);
        });

        return () => {
            paragraphElements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="desktopMenu" >
            {props.sectionsData.map((sectionData, index) => (
                <div
                    key={index}
                    className={`desktopMenuListItem bordersRules ${activeMenuItem === index ? 'active' : ''}`}
                    onClick={() => {handleItemClick(index);}}
                    style={{ display:  index === 0 ? 'none' : 'flex'}}
                >
                    <div className="menuLinkWrapper">
                        <span>{sectionData.icon}</span>
                        <span className="desktopMenuListItemText">{sectionData.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default memo(MenuItems);
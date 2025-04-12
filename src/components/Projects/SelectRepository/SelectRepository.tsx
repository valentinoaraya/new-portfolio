import "./SelectRepository.css"

interface Props {
    isOpen: boolean;
    onSelectOption1: () => void;
    onSelectOption2: () => void;
}

const SelectRepository: React.FC<Props> = ({ isOpen, onSelectOption1, onSelectOption2 }) => {
    return (
        <div className={`selectRepository ${isOpen ? 'open' : ''}`}>
            <p className="optionRepository" onClick={onSelectOption1}>Front End</p>
            <p className="optionRepository" onClick={onSelectOption2}>Back End</p>
        </div>
    );
}

export default SelectRepository;

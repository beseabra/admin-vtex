import React from 'react';
import { Modal } from 'vtex.styleguide';

interface CheckedCategories {
    [key: number]: boolean
}

interface CheckedSubCategories {
    [key: number]: {
        [key: number]: boolean
    }
}

interface ModalProps {
    isModalOpen: boolean;
    handleModalToggle: () => void;
    checkedCategories: CheckedCategories;
    checkedSubCategories: CheckedSubCategories;
}

export default function ModalComponent({
    isModalOpen,
    handleModalToggle,
    checkedCategories,
    checkedSubCategories
}: ModalProps) {
    return (
        <Modal
            centered
            isOpen={isModalOpen}
            onClose={handleModalToggle}
        >
            <div className="dark-gray">
                <h1>Produtos Selecionados</h1>
                <div>
                    <h2>Checked Categories</h2>
                    <ul>
                        {Object.keys(checkedCategories).map((categoryId) => (
                            checkedCategories[Number(categoryId)] && (
                                <li key={categoryId}>Category ID: {categoryId}</li>
                            )
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Checked SubCategories</h2>
                    {Object.keys(checkedSubCategories).map((categoryId) => (
                        <div key={categoryId}>
                            <h3>Category ID: {categoryId}</h3>
                            <ul>
                                {Object.keys(checkedSubCategories[Number(categoryId)]).map((subCategoryId) => (
                                    checkedSubCategories[Number(categoryId)][Number(subCategoryId)] && (
                                        <li key={subCategoryId}>SubCategory ID: {subCategoryId}</li>
                                    )
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    )
}

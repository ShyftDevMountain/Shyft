import React from 'react';
import './EditInfoModal.css';

class EditInfoModal extends React.Component{
    render(){
        return (
            <div>
                <div className="editinfo-modal">
                    <div className="editinfo-info-container">
                        <div className="editinfo-update-container">
                            <form>
                                <div className="editinfo-update-content">
                                    <input type="text" placeholder="Update Name"/>
                                </div>
                                <div className="editinfo-update-content">
                                    <input type="text" placeholder="Update Name"/>
                                </div>
                                <div className="editinfo-update-content">
                                    <input type="text" placeholder="Update Name"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default EditInfoModal;

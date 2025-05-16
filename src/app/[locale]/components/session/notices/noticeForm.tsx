const noticeForm = () => {
    return (
        <div className="p-4 font-fredoka">
            <form action="" className="border border-color mx-auto w-96">
                <div className="form-group">
                    <label htmlFor="title" className="">Title</label>
                    <input type="text" name="title" id="title" className="form-control" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" className="form-control">
                        <option value="info">Info</option>
                        <option value="warning">Warning</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default noticeForm
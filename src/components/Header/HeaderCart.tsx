function HeaderCart() {
    return(
        <>
            <a href="#" className="position-relative me-4 my-auto" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">
                <img src="img/cart.png" alt="cart" width="25%" />
                <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1 cart-count-position">3</span>
            </a>
        </>
    );
}

export default HeaderCart;
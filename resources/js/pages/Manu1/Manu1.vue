

<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Products</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Products</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-sm-10">
                                    <h2 class="card-title">Products Table</h2>
                                </div>
                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-success btn-block" data-toggle="modal"
                                        data-target="#modal-lg"><i class="fa fa-plus-square" aria-hidden="true"></i>
                                        Add Products</button>


                                </div>
                            </div>
                        </div>
<!-- <h2>MEO</h2> -->
                        <div class="card-body">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Products id</th>
                                        <th>Products number</th>
                                        <th>Product type</th>
                                        <th>Product name</th>
                                        <th>Product img</th>
                                        <th>Building</th>
                                        <th>Product status</th>
                                        <th>Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>213212</td>
                                        <td>321546</td>
                                        <td>Router</td>
                                        <td>TPlink</td>
                                        <td></td>
                                        <td>27</td>
                                        <td><span class="right badge badge-success">working</span></td>
                                        <td>
                                            <button type="button" class="btn-sm btn-info">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" class="btn-sm btn-warning" data-toggle="modal"
                                                data-target="#Editproducts">
                                                <i class="fa fa-cog" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" class="btn-sm btn-danger">
                                                <i class="fa fa-window-close" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="card-footer clearfix">
                            <ul class="pagination pagination-sm m-0 float-right">
                                <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="modal-lg">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add Products</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-row">
                            <div class="col-4">
                                <label for="number">Product id</label>
                                <input type="text" class="form-control" placeholder="Product id">
                            </div>

                            <div class="col-4">
                                <label for="number">product number</label>
                                <input type="text" class="form-control" placeholder="product number">
                            </div>

                            <div class="col-4">
                                <label for="number">Product type</label>
                                <select id="inputState" class="form-control">
                                    <option selected> type</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row pt-2">

                            <div class="col-4">
                                <label for="number">product name</label>
                                <input type="text" class="form-control" placeholder="product name">
                            </div>

                            <div class="col-4">
                                <label for="number">Building</label>
                                <select id="inputState" class="form-control">
                                    <option selected> Building</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <label for="number">Product_status</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Status</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div class="col-4">
                                <label for="number">price</label>
                                <input type="text" class="form-control" placeholder="price">
                            </div>
                            <div class="col-4">
                                <label for="number">quantity</label>
                                <input type="text" class="form-control" placeholder="quantity">
                            </div>
                            <div class="col-4">
                                <label for="number">unit</label>
                                <input type="text" class="form-control" placeholder="unit">
                            </div>
                            <div class="col-4">
                                <label for="number">dates</label>
                                <input type="text" class="form-control" placeholder="dates">
                            </div>

                            <div class="col-4">
                                <label for="exampleFormControlFile1">Product_img</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                        </div>
                    </form>
                </div>

                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>



<!-- 

    <div class="modal fade" id="Editproducts">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit Products</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-row">
                            <div class="col-4">
                                <label for="number">Product id</label>
                                <input type="text" class="form-control" placeholder="Product id">
                            </div>

                            <div class="col-4">
                                <label for="number">product number</label>
                                <input type="text" class="form-control" placeholder="product number">
                            </div>

                            <div class="col-4">
                                <label for="number">Product type</label>
                                <select id="inputState" class="form-control">
                                    <option selected> type</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row pt-2">

                            <div class="col-4">
                                <label for="number">product name</label>
                                <input type="text" class="form-control" placeholder="product name">
                            </div>

                            <div class="col-4">
                                <label for="number">Building</label>
                                <select id="inputState" class="form-control">
                                    <option selected> Building</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <label for="number">Product_status</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Status</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div class="col-4">
                                <label for="number">price</label>
                                <input type="text" class="form-control" placeholder="price">
                            </div>
                            <div class="col-4">
                                <label for="number">quantity</label>
                                <input type="text" class="form-control" placeholder="quantity">
                            </div>
                            <div class="col-4">
                                <label for="number">unit</label>
                                <input type="text" class="form-control" placeholder="unit">
                            </div>
                            <div class="col-4">
                                <label for="number">dates</label>
                                <input type="text" class="form-control" placeholder="dates">
                            </div>

                            <div class="col-4">
                                <label for="exampleFormControlFile1">Product_img</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="from-group">
                                    <label for="start-time">Start Time</label>
                                    <input type="text" class="from-control flatpickr">
                                    <span class="invalid-feedback"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="from-group">
                                    <label for="end-time">End Time</label>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>

                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div> -->
</template>
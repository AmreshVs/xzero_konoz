import Card from 'components/card';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="wh100 vhcenter login">
      <Card className="p-5 col-4">
        <div className="text-center">
          <img className="logo" src={require('../../assets/images/logo.png')} alt="logo" />
        </div>
        <h1 className="title-1 text-center">Hello, Welcome to Xzero!</h1>
        <p className="caption text-center">Login to declare winner for konoz!</p>
        <form>
          <div className="form-group pb-2">
            <div className="input-icon">
              <svg viewBox="0 0 512 512" className="icon-input"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
              <input type="email" className="form-control" placeholder="Enter email" />
              <p className="text-danger pt-2 mb-0">Enter valid email address</p>
            </div>
          </div>
          <div className="form-group pb-2">
            <div className="input-icon">
              <svg viewBox="0 0 512 512" className="icon-input"><path d="M320 48c79.529 0 144 64.471 144 144s-64.471 144-144 144c-18.968 0-37.076-3.675-53.66-10.339L224 368h-32v48h-48v48H48v-96l134.177-134.177A143.96 143.96 0 0 1 176 192c0-79.529 64.471-144 144-144m0-48C213.965 0 128 85.954 128 192c0 8.832.602 17.623 1.799 26.318L7.029 341.088A24.005 24.005 0 0 0 0 358.059V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24v-24h24c13.255 0 24-10.745 24-24v-20l40.049-40.167C293.106 382.604 306.461 384 320 384c106.035 0 192-85.954 192-192C512 85.965 426.046 0 320 0zm0 144c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"></path></svg>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
          </div>
          <p className="text-danger pb-2 mb-0">Invalid email or password!</p>
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-100">
              <svg viewBox="0 0 512 512" className="icon-btn"><path fill="currentColor" d="M400 240H128v-94.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v24c0 13.3 10.7 24 24 24s24-10.7 24-24v-22.6C368 65.8 304 .2 224.3 0 144.8-.2 80 64.5 80 144v96H48c-26.5 0-48 21.5-48 48v176c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V288c0-26.5-21.5-48-48-48zm0 224H48V288h352v176zm-176-32c-15.5 0-28-12.5-28-28v-56c0-15.5 12.5-28 28-28s28 12.5 28 28v56c0 15.5-12.5 28-28 28z"></path></svg>
              Login
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default LoginPage;
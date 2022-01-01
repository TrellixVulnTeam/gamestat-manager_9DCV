import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private webRequest: WebRequestService) { }

 
  /*************************
          * Users *
  *************************/

  /* Create Users */

  createUser(name: string, lastname:string, username: string, email:string, password: string, _roleId: string)
  {
    return this.webRequest.post('api/users/register', {name, lastname, username, email, password, _roleId});
  }

  /* get all Users */

  getAllUsers()
  {
    return this.webRequest.get('api/users');
  }

  /* get all Users */

  getUserByID(id: string)
  {
    return this.webRequest.get(`api/users/${id}`);
  }


  /* update user */

  updateUser(id: string, name: string, lastname:string, username: string, email:string, _roleId: string)
  {
    return this.webRequest.patch(`api/users/${id}`, {name, lastname, username, email, _roleId});
  }

  /* delete User */

  deleteUser(id: string)
  {
    return this.webRequest.delete(`api/users/${id}`);
  }

 
  /*************************
          * Roles *
  *************************/

  /* Get All Roles */

  getAllRoles()
  {
    return this.webRequest.get('api/roles');
  }

  /* Get Roles by ID */

  getRoleByID(id: string)
  {
    return this.webRequest.get(`api/roles/${id}`);
  }

  /* Create new Role */

  createRole(name: string)
  {
    return this.webRequest.post('api/roles', {name});
  }

  /* Update Role */

  updateRole(id: string, name: string)
  {
    return this.webRequest.patch(`api/roles/${id}`, {name});
  }

  /* Delete Role */

  deleteRole(id: string)
  {
    return this.webRequest.delete(`api/roles/${id}`);
  }

  /*************************
        * Categories *
  *************************/

    /* Get All Categories */
  
    getAllCategoriesPublic()
    {
      return this.webRequest.get('api/categories/all');
    }

  /* Get All Categories */
  
  getAllCategories()
  {
    return this.webRequest.get('api/categories');
  }

  /* Get Category by ID */

  getCategoryByID(id: string)
  {
    return this.webRequest.get(`api/categories/${id}`);
  }

  /* Create Category */

  addCategory(name: string)
  {
    return this.webRequest.post('api/categories', {name});
  }

  /* Update Category */

  updateCategory(id: string, name: string)
  {
    return this.webRequest.patch(`api/categories/${id}`, {name});
  }

  /* delete */

  deleteCategory(id: string)
  {
    return this.webRequest.delete(`api/categories/${id}`);
  }

  /*************************
          * Stats *
  *************************/

  /* Get All Stats */

  getAllStats()
  {
    return this.webRequest.get('api/stats');
  }

  /* get Stat by ID */

  getStatByID(id: string)
  {
    return this.webRequest.get(`api/stats/${id}`);
  }

  /* Create Stat */

  addStat(name: string)
  {
    return this.webRequest.post('api/stats', {name});
  }

  /* Update Stat */

  updateStat(id: string, name: string)
  {
    return this.webRequest.patch(`api/stats/${id}`, {name});
  }

  /* Delete Stat */

  deleteStat(id: string)
  {
    return this.webRequest.delete(`api/stats/${id}`);
  }

  /*************************
          * Items *
  *************************/ 

  /* Get All Items */

  getAllItems()
  {
    return this.webRequest.get('api/items');
  }

  /* Get Item By GameID */

  getItemByGame(id: string)
  {
    return this.webRequest.get(`api/items/game/${id}`);
  }

  /* Get Item by ID */

  getItemByID(id: string)
  {
    return this.webRequest.get(`api/items/${id}`);
  }

  /* Create Item */

  addItem(_categoryID: string, _gameID: string, name: string, image: File)
  {
    var formData = new FormData();
    formData.append('_categoryID', _categoryID);
    formData.append('_gameID', _gameID);
    formData.append('name', name);
    formData.append('image', image, image.name);

    return this.webRequest.post('api/items', formData);
  }

  /* Update Item */

  updateItem(id: string, _categoryID: string, _gameID: string, name: string, image: File)
  {
    var formData = new FormData();

    if(image)
    {
      formData.append('_categoryID', _categoryID);
      formData.append('_gameID', _gameID);
      formData.append('name', name);
      formData.append('image', image, image.name);
    }
    else
    {
      formData.append('_categoryID', _categoryID);
      formData.append('_gameID', _gameID);
      formData.append('name', name);      
    }

    return this.webRequest.patch(`api/items/${id}`, formData);
  }

  /* Delete Item */

  deleteItem(id: string)
  {
    return this.webRequest.delete(`api/items/${id}`);
  }

  /*************************
          * Games *
  *************************/ 
 
  /* Get All Games */

  getAllGames()
  {
    return this.webRequest.get('api/games');
  }

    /* Get All Games Public*/

    getAllGamesPublic()
    {
      return this.webRequest.get('api/games/all');
    }

  /* Get Game By ID */

  getGameByID(id: string)
  {
    return this.webRequest.get(`api/games/${id}`);
  }

  /* Create Game */

  addGame(name: string, description: string, image: File)
  {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append('image', image, image.name);
    return this.webRequest.post('api/games', formData);
  }

  /* Update Game */

  updateGame(id: string, name: string, description: string, image: File)
  {

    var formData = new FormData();

    if(image)
    {
      formData.append("name", name);
      formData.append("description", description);
      formData.append('image', image, image.name);
    }
    else
    {
      formData.append("name", name);
      formData.append("description", description); 
    }

    
    return this.webRequest.patch(`api/games/${id}`, formData);
  }

  /* Delete Game */

  deleteGame(id: string)
  {
    return this.webRequest.delete(`api/games/${id}`);
  }

  /*************************
          * Boost *
  *************************/ 

  /* Get All Boosts */

  getAllBoost()
  {
    return this.webRequest.get('api/boosts');
  }

  /* Get Boost By ID */
  
  getBoostByID(id: string)
  {
    return this.webRequest.get(`api/boosts/${id}`);
  }

  /* Create Boost */

  addBoost(_itemID: string, _statID: string, value: number)
  {
    return this.webRequest.post('api/boosts', {_itemID, _statID, value});
  }

  /* Update Boost */

  updateBoost(id: string, _itemID: string, _statID: string, value: number)
  {
    return this.webRequest.patch(`api/boosts/${id}`, {_itemID, _statID, value});
  }

  /* Delete ID */

  deleteBoost(id: string)
  {
    return this.webRequest.delete(`api/boosts/${id}`);
  }

  /*************************
        * GameStat *
  *************************/   

  /* Get All GameStats */

  getAllGameStats()
  {
    return this.webRequest.get('api/gamestats');
  }

  /* Get GameStat By ID */

  getGameStatByID(id: string)
  {
    return this.webRequest.get(`api/gamestats/${id}`);
  }

  /* Create GameStat */

  addGameStat(_gameID: string, _boostID: string)
  {
    return this.webRequest.post('api/gamestats', {_gameID, _boostID});
  }

  /* Update GameStat */

  updateGameStat(id: string, _gameID: string, _boostID: string)
  {
    return this.webRequest.patch(`api/gamestats/${id}`, {_gameID, _boostID});
  }

  /* Delete GameStat */

  deleteGameStat(id: string)
  {
    return this.webRequest.delete(`api/gamestats/${id}`);
  }

  /* Calculate GameStat */

  CalculateBestOption(Game: string, Item: string)
  {
    return this.webRequest.get(`api/gamestats/calculate/${Game}/${Item}`);
  }
  
}
